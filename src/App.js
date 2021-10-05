import './App.css';
import { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAlbum from './components/CreateAlbum';
import ShowAlbum from './components/ShowAlbum';
import ShowImage from './components/ShowImage';
import { ShowImageAnimation } from './components/ShowImageAnimation';

export const AlbumContext = createContext();

const reducers = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "CREATE_ALBUM":
      console.log(action.payload)
      return [...state,action.payload];
    case "CREATE_IMAGE":

      console.log(action);
      const newImage = state.map((item)=>{
        console.log("====================", item);
        if(item.albumId===action.payload.id){
          console.log("print",{...item, images: [ ...item.images,...action.payload.image]});
          return {...item, images: [...item.images, ...action.payload.image]}
        }
        else{
          return item;
        }
      })
      return newImage;
    default:
      return state;
  }
}

function App() {
  const [ album, dispatch ] = useReducer(reducers,[])
  console.log(album)
  return (
    <AlbumContext.Provider value={{album,dispatch}}>

      <div className="main-container">
        <div className="sub-container">
            <Router>
              <Switch>
                <Route exact path="/" render={()=> <CreateAlbum/>} />
                <Route exact path="/:albumName/:albumId" render={(props)=><ShowAlbum {...props} />} />
                {/* <Route exact path="/:albumName/:albumId/:index" render={(props)=><ShowImage {...props} />}></Route> */}
                <Route exact path="/:albumName/:albumId/:index" render={(props)=><ShowImageAnimation {...props} />}></Route>
              </Switch>
            </Router>
        </div>
      </div>
    </AlbumContext.Provider>
  );
}

export default App;

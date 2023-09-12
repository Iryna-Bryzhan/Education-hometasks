import { isAuth } from "./authoresation.js";
import { store } from "./store.js";
import openExport from "./getData.js";
import openImport from "./setData.js";

isAuth()

try {
    store()
}catch (e) {

}

try{
    openExport()
}catch(e) {

}

try{
    openImport()
}catch(e) {

}



/**
 * @param 
 */
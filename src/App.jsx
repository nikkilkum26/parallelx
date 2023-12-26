import './App.css'
import { Suspense, lazy } from 'react';
const Parallex = lazy(() => import('./components/Parallex'));
// const pic_1= lazy(() => import('./assets/pic_1.jpg'));
import pic_1 from './assets/pic_1.jpg'
import pic_2 from './assets/pic_2.jpg'
import pic_3 from './assets/pic_3.jpg'
import pic_4 from './assets/pic_4.jpg'
import pic_5 from './assets/pic_5.jpg'
import pic_6 from './assets/pic_6.jpg'
import pic_7 from './assets/pic_7.jpg'
import pic_8 from './assets/pic_8.jpg'
import pic_9 from './assets/pic_9.jpg'


function App() {


  return (
    <Suspense fallback={"Loading ..."}>

    <Parallex
      selectedImages={[
        pic_1,
        pic_2,
        pic_3,
        pic_4,
        pic_5,
        pic_6,
        pic_7,
        pic_8,
        pic_9,
        // pic_10,
        // pic_11,
        // pic_12,
      ]}
    />
     </Suspense>
  );
}

export default App

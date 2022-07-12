import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
const Home = ()=> {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://pngimg.com/uploads/hat/hat_PNG5706.png'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://toppng.com/uploads/preview/leather-jacket-png-image-transparent-wholesale-leather-jackets-115635384045mvwuk8hjd.png'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sneaker-brands-1588881434.png?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://www.forbesindia.com/media/wpower_2021/Aparna-Purohit.jpg'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://m.media-amazon.com/images/I/71vp8Lec9JL._UX466_.jpg'
    }
  ]
  return (
    <div>
      <Directory categories={categories}/>
      <Outlet></Outlet>
      </div>
  );
}


export default Home;
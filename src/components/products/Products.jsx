import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/produtsSlices';

const Products = () => {
  
  const  {productsData, isLoading} = useSelector((state) => state.add)
  console.log(productsData);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts());
  },[])
  if(isLoading==true){
    return <h1>Loading...</h1>;
  }

return (
  <div>
      {productsData.slice(0,6).map((el) =>{
        return (<div key={el.id}>
          <img src={el.images[0]} />
          <h1>{el.title}</h1>
        </div>)
      })}
  </div>
)
}

export default Products
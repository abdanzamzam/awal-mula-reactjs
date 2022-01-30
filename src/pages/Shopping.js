import { useEffect, useState } from "react";
import api from "../api/service";
import ModalCategories from "../components/ModalCategories";
import NavButtom from "../components/NavButtom";
import NavShoppingTop from "../components/NavShoppingTop";
import Product from "../components/Product";

function Shopping() {
  const [categories, setCategories] = useState([]);
  const [num, setNum] = useState(6);
  const [products, setProducts] = useState([]);
  const [productByCategory, seProductByCategory] = useState([]);
  const [popUpCategories, setPopUpCategories] = useState(false);

  const showCategories = () => {
    if (!popUpCategories) {
      setPopUpCategories(true);
    } else {
      setPopUpCategories(false);
    }
  };

  const handleNum = () => {
    setNum(num + 4);
  };

  const getByCategory = async (id) => {
    console.log(id);
    const produtsByCategory = await api.categoryProductURL(id);
    console.log(produtsByCategory);
  };

  useEffect(async () => {
    const getDataCategory = await api.categoryURL();
    const getDataProduct = await api.productURL(num);
    const dataCategories = [];
    if (getDataCategory) {
      getDataCategory.children_data.map((item, index) => {
        if (index < 6) {
          dataCategories.push(item);
        }
      });
      setCategories(dataCategories);
    }
    if (getDataProduct) {
      setProducts(getDataProduct.items);
    }
  }, [num]);

  return (
    <>
      <div className="static flex justify-center">
        <div className="flex justify-center w-screen">
          {popUpCategories && (
            <>
              <div className="fixed md:w-96 lg:w-96 xl:w-96 z-30 top-0 h-screen bg-black opacity-40"></div>
              <ModalCategories
                showCategories={showCategories}
                getByCategory={getByCategory}
                categories={categories}
              />
            </>
          )}
          <NavShoppingTop />
          <nav className="p-2 mt-16 fixed md:w-96 lg:w-96 xl:w-96 z-10 top-0 h-10">
            <div className="flex justify-center items-center">
              <div className="w-auto h-5 rounded-lg shadow-md z-50 px-2 flex justify-center items-center bg-white py-1">
                <button
                  onClick={() => showCategories()}
                  className="flex justify-center items-center"
                >
                  <i className="fas fa-sort mr-2"></i>
                  <p className="font-semibold text-xs">Chose Category</p>
                </button>
              </div>
            </div>
          </nav>
          <div className="md:w-96 lg:w-96 xl:w-96 mt-28 mb-20">
            <Product products={products} handleNum={handleNum} />
          </div>
          <NavButtom />
        </div>
      </div>
    </>
  );
}

export default Shopping;

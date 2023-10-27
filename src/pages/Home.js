import Header from "../components/Header.js";
import Category from "../components/Category";
import categoryList from "../components/categoryList.js";
import Contact from "../components/Contact.js";


export default function Home() {
  return (
    <div className="page">
    
      <Header />

      <div className="section">
        {categoryList.map((categoryItem) => (
          <Category
            key={categoryItem.key}
            illo={categoryItem.illo}
            title={categoryItem.title}
            link={categoryItem.link}
          />
        ))}
      </div>
      <Contact />
    </div>
  );
}

import { Component } from "react";
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

class Directory extends Component {
    render (){
        const categories = this.props.categories;
        return (
            <div className="directory-container">
                { categories.map((category) => {
                   return <CategoryItem id={category.id} category={category}/>
                })}
            </div>
        );
    }
}

export default Directory;
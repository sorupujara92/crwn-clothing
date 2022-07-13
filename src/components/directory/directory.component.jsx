import { Component } from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss'

class Directory extends Component {
    render (){
        const categories = this.props.categories;
        return (
            <div className="directory-container">
                { categories.map((category) => {
                   return <DirectoryItem id={category.id} category={category}/>
                })}
            </div>
        );
    }
}

export default Directory;
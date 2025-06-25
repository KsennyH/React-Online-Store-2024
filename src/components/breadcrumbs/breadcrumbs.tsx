import BreadcrumbsItem from './breadcrumbs-item/breadcrumbs-item';

function Breadcrumbs() {
    return (
        <div className="breadcrumbs"> 
          <div className="container"> 
                <ul className="breadcrumbs__list">
                    <BreadcrumbsItem />
                    <BreadcrumbsItem />
                    <BreadcrumbsItem />
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
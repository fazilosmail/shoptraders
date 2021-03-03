import React, { Component } from 'react'
import MenData from '../men.json'
import { db, auth } from '../firebase'
let min
let max
let mm
let gg
let result1,result2,result3,result4,findMax1,findMax2,findMax3,findMax4,findMin1,findMin2,findMin3,
findMin4,image,brand,prdname,discountprice,mrp,arr,arrr
class Men extends React.Component {
    constructor(props) {
    super(props);
    this.test3 = 'this is test3';
    // min = Math.min(...MenData.map(item => item.price))
    
    // max = Math.max(...MenData.map(item => item.price))
    result1 = MenData.filter(person => person.price >= 100 && person.price <= 1000 ).map((filteredPrice) =>
      filteredPrice.price
      )
    result2 = MenData.filter(person => person.price >= 1001 && person.price <= 1500 ).map((filteredPrice) =>
      filteredPrice.price
      )
    result3 = MenData.filter(person => person.price >= 1501 && person.price <= 3000 ).map((filteredPrice) =>
      filteredPrice.price
      )
    result4 = MenData.filter(person => person.price >= 3001 && person.price <= 10000 ).map((filteredPrice) =>
      filteredPrice.price
      )
    findMax1 = Math.max.apply(null, result1)
    findMax2 = Math.max.apply(null, result2)
    findMax3 = Math.max.apply(null, result3)
    findMax4 = Math.max.apply(null, result4)
    findMin1 = Math.min.apply(null, result1)
    findMin2 = Math.min.apply(null, result2)
    findMin3 = Math.min.apply(null, result3)
    findMin4 = Math.min.apply(null, result4)

    this.state = {
    men: []
  }
  }

  
  componentDidMount() {
    
    fetch("http://localhost:3001/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            men: result,
          });
          console.log(this.state.men)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleChange(event) {


  this.setState({
      isChecked: event.target.checked,
      inputValue: event.target.value
      },
       () => {
        if(this.state.isChecked === true) {
            this.setState({ val: this.state.inputValue })
        // console.log('ff'+ as)
       }
       if(this.state.isChecked === false) {
        console.log('false')
       }
     }
    )
  
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.warn(nextState)
  //   // if(prevState != this.state.inputValue) {
  //   //   return true
  //   // }
  //   // return true
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.warn(prevState)
  //   return true
  //   // if (prevState.someString !== this.state.someString) {
  //   //     console.log(true);
  //   // }
  // }

  render() {
    return (
      <div>
       <div id="mountRoot" style={{minHeight: '750px', marginTop: '-2px'}}>
        <div data-reactroot>
          <div className="application-base">
            <main className="search-base">
              <div className=" row-base">
                <div className="search-leftContainer column-base" style={{WebkitBoxFlex: 1, flex: '1 1 0%'}}>
                  <section>
                    <div className="condition-render-verticalFilters condition-render-boundary-top" style={{top: '0px', bottom: 'auto'}}>
                      <div className="vertical-filters-filters header-container"><span className="header-title">FILTERS</span></div>
                      <div className="vertical-filters-filters brand-container">
                        <span className="vertical-filters-header">Brand</span>
                        <div className="filter-search-filterSearchBox"><input type="text" className="filter-search-inputBox filter-search-hidden" placeholder="Search for Brand" /><span className="myntraweb-sprite filter-search-iconSearch sprites-search" /></div>
                        <ul className="brand-list">
                          
                          {this.state.men.map((me) => (
                              <li>
                              <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" checked={this.state.checked} onChange={e => this.handleChange(e)} defaultValue="{me.brand}" value={me.brand} />{me.brand}

                              <div className="common-checkboxIndicator" />
                            </label>
                            </li>
                          ))}
                          
                        </ul>
                      </div>
                      <div>{min}</div>
                      <p>test3: {this.test3}</p>
                      <div className="vertical-filters-filters">
                        <span className="vertical-filters-header">Price</span>
                        <ul className="price-list">
                            
                              <li>
                              <label className="common-customCheckbox vertical-filters-label">

                              <input type="checkbox" className="price-input" value={findMax1} />
                                Rs. {findMin1} to Rs. {findMax1}
                              <span className="price-num">
                                </span>
                                <div className="common-checkboxIndicator" />
                                </label>
                              </li>
                              <li>
                              <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input"  />
                                Rs. {findMin2} to Rs. {findMax2}
                              <span className="price-num">
                                </span>
                                <div className="common-checkboxIndicator" />
                                </label>
                              </li>
                              <li>
                              <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input"  />
                                Rs. {findMin3} to Rs. {findMax3}
                              <span className="price-num">
                                </span>
                                <div className="common-checkboxIndicator" />
                                </label>
                              </li>
                              <li>
                              <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input"  />
                                Rs. {findMin4} to Rs. {findMax4}
                              <span className="price-num">
                                </span>
                                <div className="common-checkboxIndicator" />
                                </label>
                              </li>
                        </ul>
                      </div>
                      <div className="vertical-filters-filters">
                        <span className="vertical-filters-header">Color</span>
                        <div className="filter-search-filterSearchBox"><input type="text" className="filter-search-inputBox filter-search-hidden" placeholder="Search for Color" /><span className="myntraweb-sprite filter-search-iconSearch sprites-search" /></div>
                        <ul>
                        
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={1606}>
                              <span data-colorhex="blue" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(0, 116, 217)'}} />{/* react-text: 167 */}Blue{/* /react-text */}{/* react-text: 168 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 170 */}({/* /react-text */}{/* react-text: 171 */}1606{/* /react-text */}{/* react-text: 172 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Blue" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={1338}>
                              <span data-colorhex="white" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(255, 255, 255)'}} />{/* react-text: 178 */}White{/* /react-text */}{/* react-text: 179 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 181 */}({/* /react-text */}{/* react-text: 182 */}1338{/* /react-text */}{/* react-text: 183 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="White" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={1212}>
                              <span data-colorhex="navy blue" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(60, 68, 119)'}} />{/* react-text: 189 */}Navy Blue{/* /react-text */}{/* react-text: 190 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 192 */}({/* /react-text */}{/* react-text: 193 */}1212{/* /react-text */}{/* react-text: 194 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Navy Blue" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={1062}>
                              <span data-colorhex="red" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(211, 75, 86)'}} />{/* react-text: 200 */}Red{/* /react-text */}{/* react-text: 201 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 203 */}({/* /react-text */}{/* react-text: 204 */}1062{/* /react-text */}{/* react-text: 205 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Red" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={798}>
                              <span data-colorhex="black" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(54, 69, 79)'}} />{/* react-text: 211 */}Black{/* /react-text */}{/* react-text: 212 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 214 */}({/* /react-text */}{/* react-text: 215 */}798{/* /react-text */}{/* react-text: 216 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Black" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={680}>
                              <span data-colorhex="yellow" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(234, 220, 50)'}} />{/* react-text: 222 */}Yellow{/* /react-text */}{/* react-text: 223 */} {/* /react-text */}
                              <span className="colour-num">
                                {/* react-text: 225 */}({/* /react-text */}{/* react-text: 226 */}680{/* /react-text */}{/* react-text: 227 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Yellow" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li className="colour-listItem">
                            <label className="common-customCheckbox" data-count={644}>
                              <span data-colorhex="grey" className="colour-label colour-colorDisplay" style={{backgroundColor: 'rgb(159, 168, 171)'}} />{/* react-text: 233 */}Grey{/* /react-text */}{/* react-text: 234 */} {/* /react-text */}
                              <span className="colour-num">
                                644
                              </span>
                              <input type="checkbox" defaultValue="Grey" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </section>
                </div>
                <div className="search-rightContainer column-base" style={{WebkitBoxFlex: 1, flex: '1 1 0%'}}>
                  <div id="desktopSearchResults">
                    <div className=" row-base" style={{display: '-webkit-flex'}}>
                      <section className="horizontal-filters-base horizontal-filters-hideBorder horizontal-filters-addBoxShadow">
                        <div>
                          <div className="horizontal-filters-sortContainer">
                            <div>
                              <div>
                                <div className="sort-sortBy">
                                  {/* react-text: 373 */}Sort by : {/* /react-text */}<span>Recommended</span><span className="myntraweb-sprite sort-downArrow sprites-downArrow" />
                                  <ul className="sort-list">
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="new" />{/* react-text: 380 */}What
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="popularity" />{/* react-text: 384 */}Popularity{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="discount" />{/* react-text: 388 */}Better Discount{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="price_desc" />{/* react-text: 392 */}Price: High to Low{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="price_asc" />{/* react-text: 396 */}Price: Low to High{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="delivery_time" />{/* react-text: 400 */}Faster Delivery{/* /react-text */}
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </section>
                    </div>
                    <div className="search-searchProductsContainer row-base" style={{display: '-webkit-flex'}}>
                      <section style={{width: '100%'}}>
                        <div className="scrollToTop-button sprites-gototop myntraweb-sprite scrollToTop-isVisible" />
                        
                        <ul className="results-base">
                          
                          {this.state.men.map((me, index) => {
                          
                            arr = ['FIDO DIDO','Moda Rapido']
                            // arrr = arr.map((ar) => ar);
                            // console.log('Arr:' + arrr)

                            if(this.state.isChecked) {
                              gg = console.log('az'+this.state.val)
                               this.state.men.filter(person => person.brand == this.state.val ).map((filteredPrice) =>
                                console.log('aza'+filteredPrice.price)
                              )
                              // image,brand,prdname,discountprice,mrp
                              // image = me.searchImage
                              // brand = me.brand
                              // prdname = me.productName
                              // discountprice = me.price
                              // mrp = me.mrp
                            }
                            if(me.brand != this.state.isChecked) {
                              gg = console.log('az'+this.state.val)
                            }
                            
                            // if(this.state.isChecked === false) {
                            // // gg = console.log(this.state.men)
                            // image = me.searchImage
                            // brand = me.brand
                            // prdname = me.productName
                            // discountprice = me.price
                            // mrp = me.mrp
                            // }
                            // else{
                            //   image = me.searchImage
                            // brand = me.brand
                            // prdname = me.productName
                            // discountprice = me.price
                            // mrp = me.mrp
                            // }
                          return (
                            
                            // <div>{this.state.inputValue}</div>
                            <li className="product-base">
                            <div className="product-thumbShim" />
                            <a href="#" style={{display: 'block'}}>
                              <div className="product-imageSliderContainer">
                                <div className="product-sliderContainer" style={{display: 'block'}}>
                                  <div style={{background: 'rgb(255, 237, 243)'}}>
                                    <div style={{height: '280px', width: '100%'}}>
                                    {gg}
                                      <picture className="img-responsive" style={{width: '100%', height: '100%', display: 'block'}}>
      
                                        <img src= {me.searchImage} className="img-responsive" alt= {me.productName} title= {me.productName} style={{width: '100%', display: 'block'}} />
                                      </picture>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-productMetaInfo">
                                <h3 className="product-brand">{me.brand}</h3>
                                <h4 className="product-product">{me.productName}</h4>
                                <h4 className="product-sizes">
                                  Sizes:<span className="product-sizeNoInventoryPresent">28, </span><span className="product-sizeInventoryPresent">30, </span><span className="product-sizeInventoryPresent">32, </span><span className="product-sizeInventoryPresent">34, </span><span className="product-sizeInventoryPresent">36</span>
                                </h4>
                                <div className="product-price">
                                  <span>
                                    <span className="product-discountedPrice">
                                      Rs. {me.price}
                                    </span>
                                    <span className="product-strike">
                                      Rs. {me.mrp}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="image-grid-similarColorsCta product-similarItemCta">
                            <span className="myntraweb-sprite image-grid-similarColorsIcon sprites-similarProductsIcon" />
                            <span className="image-grid-iconText">VIEW SIMILAR</span></div>
                            <div className="product-actions ">
                              <span className="product-actionsButton product-wishlist " style={{width: '100%', textAlign: 'center'}}>
                                wishlist
                              </span>
                            </div>
                            <div className="product-sizeDisplayDiv">
                              <div className="product-sizeDisplayHeader"><span>Select a size</span><span className="myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove" /></div>
                              <div className="product-sizeButtonsContaier">
                              <button className="product-sizeButton">30</button>
                              <button className="product-sizeButton">32</button>
                              <button className="product-sizeButton">34</button>
                              <button className="product-sizeButton">36</button>
                              </div>
                            </div>
                          </li>
                            
                            )
                          // }
                          })}
                        </ul>
                        <div className="results-showMoreContainer">
                          <ul className="pagination-container">
                            <li className="pagination-paginationMeta">
                              Page 1 of 54
                            </li>
                            <li className="pagination-active">
                              <a href="#">
                                1
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                2
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                3
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                4
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                5
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                6
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                7
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                8
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                9
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                10
                              </a>
                            </li>
                            <li className="pagination-next">
                              <a rel="next" href="#">
                                Next<span className="pagination-arrowRight" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="halfcard-leftCardContainer">
                          <div className="halfcard-leftCardOverlay" style={{display: 'none'}} />
                          <div className="halfcard-leftCard undefined halfcard-narrowLeftCard" style={{right: '-34%'}}>
                            <div className="halfcard-actualContent halfcard-noFooterGap" tabIndex={0}>
                              <div className="halfcard-paddedHeader">
                                <div className="halfcard-actualHeader">Similar Products</div>
                                <div className="halfcard-closeLeftCard"><span>✕</span></div>
                              </div>
                              <div className="halfcard-paddedContent" />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Men;

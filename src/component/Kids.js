import React from 'react'
import KidsData from '../kids.json'
class Kids extends React.Component {
  render() {
    return (


      <div id="mountRoot" style={{minHeight: '750px', marginTop: '-2px'}}>
        <div data-reactroot>
          <div className="application-base">
            <main className="search-base">
              <div className=" row-base" style={{display: '-webkit-flex'}}>
                <div className="search-leftContainer column-base" style={{WebkitBoxFlex: 1, flex: '1 1 0%'}}>
                  <section>
                    <div className="condition-render-verticalFilters condition-render-boundary-top" style={{top: '0px', bottom: 'auto'}}>
                      <div className="vertical-filters-filters header-container"><span className="header-title">FILTERS</span></div>
                      <div className="vertical-filters-filters brand-container">
                        <span className="vertical-filters-header">Brand</span>
                        <div className="filter-search-filterSearchBox"><input type="text" className="filter-search-inputBox filter-search-hidden" placeholder="Search for Brand" /><span className="myntraweb-sprite filter-search-iconSearch sprites-search" /></div>
                        <ul className="brand-list">
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Gini and Jony" />{/* react-text: 46 */}Gini and Jony{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 48 */}({/* /react-text */}{/* react-text: 49 */}745{/* /react-text */}{/* react-text: 50 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Palm Tree" />{/* react-text: 55 */}Palm Tree{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 57 */}({/* /react-text */}{/* react-text: 58 */}633{/* /react-text */}{/* react-text: 59 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="United Colors of Benetton" />{/* react-text: 64 */}United Colors of Benetton{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 66 */}({/* /react-text */}{/* react-text: 67 */}608{/* /react-text */}{/* react-text: 68 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="GAP" />{/* react-text: 73 */}GAP{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 75 */}({/* /react-text */}{/* react-text: 76 */}465{/* /react-text */}{/* react-text: 77 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Pepe Jeans" />{/* react-text: 82 */}Pepe Jeans{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 84 */}({/* /react-text */}{/* react-text: 85 */}447{/* /react-text */}{/* react-text: 86 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Indian Terrain" />{/* react-text: 91 */}Indian Terrain{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 93 */}({/* /react-text */}{/* react-text: 94 */}376{/* /react-text */}{/* react-text: 95 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Tommy Hilfiger" />{/* react-text: 100 */}Tommy Hilfiger{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 102 */}({/* /react-text */}{/* react-text: 103 */}366{/* /react-text */}{/* react-text: 104 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="vertical-filters-label common-customCheckbox">
                              <input type="checkbox" defaultValue="Kids Ville" />{/* react-text: 109 */}Kids Ville{/* /react-text */}
                              <span className="brand-num">
                                {/* react-text: 111 */}({/* /react-text */}{/* react-text: 112 */}318{/* /react-text */}{/* react-text: 113 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                        </ul>
                        <div className="brand-more">
                          {/* react-text: 116 */}+ {/* /react-text */}{/* react-text: 117 */}150{/* /react-text */}{/* react-text: 118 */} more{/* /react-text */}
                        </div>
                      </div>
                      <div className="vertical-filters-filters">
                        <span className="vertical-filters-header">Price</span>
                        <ul className="price-list">
                          <li>
                            <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input" defaultValue="149.0 TO 1011.0" />{/* react-text: 125 */}Rs. 149 to Rs. 1011{/* /react-text */}
                              <span className="price-num">
                                {/* react-text: 127 */}({/* /react-text */}{/* react-text: 128 */}8595{/* /react-text */}{/* react-text: 129 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input" defaultValue="1011.0 TO 1873.0" />{/* react-text: 134 */}Rs. 1011 to Rs. 1873{/* /react-text */}
                              <span className="price-num">
                                {/* react-text: 136 */}({/* /react-text */}{/* react-text: 137 */}1340{/* /react-text */}{/* react-text: 138 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input" defaultValue="1873.0 TO 2735.0" />{/* react-text: 143 */}Rs. 1873 to Rs. 2735{/* /react-text */}
                              <span className="price-num">
                                {/* react-text: 145 */}({/* /react-text */}{/* react-text: 146 */}44{/* /react-text */}{/* react-text: 147 */}){/* /react-text */}
                              </span>
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                          <li>
                            <label className="common-customCheckbox vertical-filters-label">
                              <input type="checkbox" className="price-input" defaultValue="2735.0 TO 3597.0" />{/* react-text: 152 */}Rs. 2735 to Rs. 3597{/* /react-text */}
                              <span className="price-num">
                                {/* react-text: 154 */}({/* /react-text */}{/* react-text: 155 */}20{/* /react-text */}{/* react-text: 156 */}){/* /react-text */}
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
                                {/* react-text: 236 */}({/* /react-text */}{/* react-text: 237 */}644{/* /react-text */}{/* react-text: 238 */}){/* /react-text */}
                              </span>
                              <input type="checkbox" defaultValue="Grey" />
                              <div className="common-checkboxIndicator" />
                            </label>
                          </li>
                        </ul>
                        <div className="colour-more">
                          <span>
                            {/* react-text: 243 */}+ {/* /react-text */}{/* react-text: 244 */}27{/* /react-text */}{/* react-text: 245 */} more{/* /react-text */}
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </section>
                </div>
                <div className="search-rightContainer column-base" style={{WebkitBoxFlex: 1, flex: '1 1 0%'}}>
                  <div id="desktopSearchResults">
                    <div className=" row-base" style={{display: '-webkit-flex'}}>
                      <section className="horizontal-filters-base">
                        <div>
                          <div className="horizontal-filters-sortContainer">
                            <div>
                              <div>
                                <div className="sort-sortBy">
                                  Sort by :<span>Recommended</span>
                                  <span className="myntraweb-sprite sort-downArrow sprites-downArrow" />
                                  <ul className="sort-list">
                                    <li>
                                      <label className="sort-label">
                                        <input type="radio" defaultValue="new" />What New
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label">
                                        <input type="radio" defaultValue="popularity" />{/* react-text: 304 */}Popularity{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="discount" />{/* react-text: 308 */}Better Discount{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="price_desc" />{/* react-text: 312 */}Price: High to Low{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="price_asc" />{/* react-text: 316 */}Price: Low to High{/* /react-text */}
                                      </label>
                                    </li>
                                    <li>
                                      <label className="sort-label ">
                                        <input type="radio" defaultValue="delivery_time" />{/* react-text: 320 */}Faster Delivery{/* /react-text */}
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="filter-summary-selectedFilterContainer filter-summary-hidden">
                          <ul className="filter-summary-filterList" />
                        </div>
                      </section>
                    </div>
                    <div className="search-searchProductsContainer row-base" style={{display: '-webkit-flex'}}>
                      <section style={{width: '100%'}}>
                        <div className="scrollToTop-button sprites-gototop myntraweb-sprite" />
                        <ul className="results-base">
                        {KidsData.map((kidsdata, index) => {
                          return (
                        
                          <li className="product-base">
                            <div className="product-thumbShim" />
                            <a href="#" style={{display: 'block'}}>
                              <div className="product-imageSliderContainer">
                                <div className="product-sliderContainer" style={{display: 'block'}}>
                                  <div style={{background: 'rgb(229, 241, 255)'}}>
                                    <div style={{height: '280px', width: '100%'}}>
                                      <picture className="img-responsive" style={{width: '100%', height: '100%', display: 'block'}}>
                                        <img src= {kidsdata.searchImage} className="img-responsive" alt="Gini and Jony Boys Pack of 2 Printed Round Neck T-shirts" title="Gini and Jony Boys Pack of 2 Printed Round Neck T-shirts" style={{width: '100%', display: 'block'}} />
                                      </picture>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-productMetaInfo">
                                <h3 className="product-brand">{kidsdata.brand}</h3>
                                <h4 className="product-product">{kidsdata.productName}</h4>
                                <h4 className="product-sizes">
                                  Sizes: <span className="product-sizeInventoryPresent">9-12M, </span><span className="product-sizeInventoryPresent">12-18M, </span><span className="product-sizeInventoryPresent">18-24M</span>
                                </h4>
                                <div className="product-price">
                                  <span>
                                    <span className="product-discountedPrice">
                                      Rs. {kidsdata.price}
                                    </span>
                                    <span className="product-strike">
                                      Rs. {kidsdata.mrp}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </a>
                            <div className="image-grid-similarColorsCta product-similarItemCta">
                            <span className="myntraweb-sprite image-grid-similarColorsIcon sprites-similarProductsIcon" />
                            <span className="image-grid-iconText">VIEW SIMILAR</span>
                            </div>
                            <div className="product-actions ">
                              <span className="product-actionsButton product-wishlist " style={{width: '100%', textAlign: 'center'}}>
                                wishlist
                              </span>
                            </div>
                            <div className="product-sizeDisplayDiv">
                              <div className="product-sizeDisplayHeader"><span>Select a size</span><span className="myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove" /></div>
                              <div className="product-sizeButtonsContaier"><button className="product-sizeButton">9-12M</button><button className="product-sizeButton">12-18M</button><button className="product-sizeButton">18-24M</button></div>
                            </div>
                          </li>
                          )
                          })}
                          <li className="results-liDummy" />
                          <li className="results-liDummy" />
                          <li className="results-liDummy" />
                          <li className="results-liDummy" />
                          <li className="results-liDummy" />
                        </ul>
                        <div className="results-showMoreContainer">
                          <ul className="pagination-container">
                            <li className="pagination-paginationMeta">
                              {/* react-text: 2388 */}Page {/* /react-text */}{/* react-text: 2389 */}1{/* /react-text */}{/* react-text: 2390 */} of {/* /react-text */}{/* react-text: 2391 */}200{/* /react-text */}
                            </li>
                            <li className="pagination-active">
                              <a href="#">
                                {/* react-text: 2394 */}1{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2397 */}2{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2400 */}3{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2403 */}4{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2406 */}5{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2409 */}6{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2412 */}7{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2415 */}8{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2418 */}9{/* /react-text */}
                              </a>
                            </li>
                            <li className="pagination-number">
                              <a href="#">
                                {/* react-text: 2421 */}10{/* /react-text */}
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
    );
  }
}

export default Kids;

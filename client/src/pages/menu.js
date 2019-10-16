import React, {Component} from 'react';
import {Header} from '../components/header';
import {SideBar} from '../components/sidebar';
class Menu extends Component {
  render() {
    console.log('render menu');
    return (
      <div>
        <div>
          <Header />
          {/* Sidebar */}
          <SideBar />
          {/* Title Page */}
          <section
            className='bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15'
            style={{backgroundImage: 'url(images/bg-title-page-01.jpg)'}}>
            <h2 className='tit6 t-center'>Pato Menu</h2>
          </section>
          {/* Main menu */}
          <section className='section-mainmenu p-t-110 p-b-70 bg1-pattern'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 col-lg-6 p-r-35 p-r-15-lg m-l-r-auto'>
                  <div className='wrap-item-mainmenu p-b-22'>
                    <h3 className='tit-mainmenu tit10 p-b-25'>STARTERS</h3>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Pine nut sbrisalona
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$29.79</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Sed fermentum eros vitae eros
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Aenean eu
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$19.35</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Feugiat maximus neque pharetra
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Sed feugiat
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$12.19</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Consectetur
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$21.89</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Etiam cursus facilisis tortor
                      </span>
                    </div>
                  </div>
                  <div className='wrap-item-mainmenu p-b-22'>
                    <h3 className='tit-mainmenu tit10 p-b-25'>Drinks</h3>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Vivamus pretium
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$29.79</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Sed fermentum eros vitae eros
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Duis pharetra ligula
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$19.35</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Feugiat maximus neque pharetra
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          In eu dolor
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$53.34</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Feugiat maximus
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$62.45</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Sed fermentum eros vitae eros
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-md-10 col-lg-6 p-l-35 p-l-15-lg m-l-r-auto'>
                  <div className='wrap-item-mainmenu p-b-22'>
                    <h3 className='tit-mainmenu tit10 p-b-25'>Main</h3>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Duis sed aliquet
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$31.18</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Suspendisse
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$70.25</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Feugiat maximus neque pharetra
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Scelerisque sed
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$36.19</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Etiam cursus facilisis tortor
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Mollis nulla
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$19.50</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Convallis augue
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$29.15</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Sed fermentum eros vitae eros
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Maecenas tristique
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$29.79</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Feugiat maximus neque pharetra
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Duis tincidunt
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$19.35</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                  </div>
                  <div className='wrap-item-mainmenu p-b-22'>
                    <h3 className='tit-mainmenu tit10 p-b-25'>Dessert</h3>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          tempus aliquet
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$9.79</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Proin lacinia nisl ut ultricies posuere nulla
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          scelerisque
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$19.35</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Sed fermentum eros vitae eros
                      </span>
                    </div>
                    {/* Item mainmenu */}
                    <div className='item-mainmenu m-b-36'>
                      <div className='flex-w flex-b m-b-3'>
                        <a href='#' className='name-item-mainmenu txt21'>
                          Cras maximus
                        </a>
                        <div className='line-item-mainmenu bg3-pattern' />
                        <div className='price-item-mainmenu txt22'>$5.79</div>
                      </div>
                      <span className='info-item-mainmenu txt23'>
                        Duis pharetra ligula at urna dignissim
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Lunch */}
          <section className='section-lunch bgwhite'>
            <div
              className='header-lunch parallax0 parallax100'
              style={{backgroundImage: 'url(images/header-menu-01.jpg)'}}>
              <div className='bg1-overlay t-center p-t-170 p-b-165'>
                <h2 className='tit4 t-center'>Lunch</h2>
              </div>
            </div>
            <div className='container'>
              <div className='row p-t-108 p-b-70'>
                <div className='col-md-8 col-lg-6 m-l-r-auto'>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-01.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Sed varius
                      </a>
                      <span className='txt23'>Aenean pharetra tortor dui in pellentesque</span>
                      <span className='txt22 m-t-20'>$29.79</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-03.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        tempus aliquet
                      </a>
                      <span className='txt23'>Aenean condimentum ante erat</span>
                      <span className='txt22 m-t-20'>$45.09</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-05.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Duis massa
                      </a>
                      <span className='txt23'>Proin lacinia nisl ut ultricies posuere nulla</span>
                      <span className='txt22 m-t-20'>$12.75</span>
                    </div>
                  </div>
                </div>
                <div className='col-md-8 col-lg-6 m-l-r-auto'>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-02.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        sbrisalona
                      </a>
                      <span className='txt23'>Proin lacinia nisl ut ultricies posuere nulla</span>
                      <span className='txt22 m-t-20'>$29.79</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-04.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Cras eget magna
                      </a>
                      <span className='txt23'>Sed fermentum eros vitae eros</span>
                      <span className='txt22 m-t-20'>$45.09</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/lunch-06.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Nullam maximus
                      </a>
                      <span className='txt23'>Duis massa nibh porttitor nec imperdiet eget</span>
                      <span className='txt22 m-t-20'>$12.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Dinner */}
          <section className='section-dinner bgwhite'>
            <div
              className='header-dinner parallax0 parallax100'
              style={{backgroundImage: 'url(images/header-menu-02.jpg)'}}>
              <div className='bg1-overlay t-center p-t-170 p-b-165'>
                <h2 className='tit4 t-center'>Dinner</h2>
              </div>
            </div>
            <div className='container'>
              <div className='row p-t-108 p-b-70'>
                <div className='col-md-8 col-lg-6 m-l-r-auto'>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-01.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Maecenas tristique
                      </a>
                      <span className='txt23'>Aenean pharetra tortor dui in pellentesque</span>
                      <span className='txt22 m-t-20'>$29.79</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-03.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Pine nut sbrisalona
                      </a>
                      <span className='txt23'>Aenean condimentum ante erat</span>
                      <span className='txt22 m-t-20'>$45.09</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-05.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Suspendisse eu
                      </a>
                      <span className='txt23'>Proin lacinia nisl ut ultricies posuere nulla</span>
                      <span className='txt22 m-t-20'>$12.75</span>
                    </div>
                  </div>
                </div>
                <div className='col-md-8 col-lg-6 m-l-r-auto'>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-02.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Cras maximus
                      </a>
                      <span className='txt23'>Proin lacinia nisl ut ultricies posuere nulla</span>
                      <span className='txt22 m-t-20'>$29.79</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-04.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Pine nut sbrisalona
                      </a>
                      <span className='txt23'>Sed fermentum eros vitae eros</span>
                      <span className='txt22 m-t-20'>$45.09</span>
                    </div>
                  </div>
                  {/* Block3 */}
                  <div className='blo3 flex-w flex-col-l-sm m-b-30'>
                    <div className='pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28'>
                      <a href='#'>
                        <img src='images/dinner-06.jpg' alt='IMG-MENU' />
                      </a>
                    </div>
                    <div className='text-blo3 size21 flex-col-l-m'>
                      <a href='#' className='txt21 m-b-3'>
                        Tempor malesuada
                      </a>
                      <span className='txt23'>Duis massa nibh porttitor nec imperdiet eget</span>
                      <span className='txt22 m-t-20'>$12.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Sign up */}
          <div className='section-signup bg1-pattern p-t-85 p-b-85'>
            <form className='flex-c-m flex-w flex-col-c-m-lg p-l-5 p-r-5'>
              <span className='txt5 m-10'>Specials Sign up</span>
              <div className='wrap-input-signup size17 bo2 bo-rad-10 bgwhite pos-relative txt10 m-10'>
                <input
                  className='bo-rad-10 sizefull txt10 p-l-20'
                  type='text'
                  name='email-address'
                  placeholder='Email Adrress'
                />
                <i className='fa fa-envelope ab-r-m m-r-18' aria-hidden='true' />
              </div>
              {/* Button3 */}
              <button type='submit' className='btn3 flex-c-m size18 txt11 trans-0-4 m-10'>
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

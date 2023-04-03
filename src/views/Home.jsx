import React from 'react'
import {useNavigate , Link} from 'react-router-dom'
import Story from '../components/Story/StoryIndex'

function Home({login}) {
    let navigate = useNavigate()
  return (
    <div>
      <div style={{height:'75px'}}>
      </div>
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center d-lg-none">
                            <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                                <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                                <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                            </button>
                        </div>
                        <nav className="navbar navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                                    
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    
                                    <div className="offcanvas-body d-block px-2 px-lg-0">
                                        
                                        <div className="card overflow-hidden">
                                            
                                            <div className="h-50px" style={{backgroundImage:'url(src/assets/images/bg/01.jpg)', backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat:' no-repeat'}}></div>
                                            
                                            <div className="card-body pt-0">
                                                <div className="text-center">
                                                    
                                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                                        <Link to="https://social.webestica.com/index.html#!"><img className="avatar-img rounded border border-white border-3" src="./src/assets/images/07.jpg" alt="" /></Link>
                                                    </div>
                                                    
                                                    <h5 className="mb-0"> <Link to="https://social.webestica.com/index.html#!">Sam Lanson </Link> </h5>
                                                    <small>Web Developer at Webestica</small>
                                                    <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                                                    
                                                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                        
                                                        
                                                        <div>
                                                            <h6 className="mb-0">2.5K</h6>
                                                            <small>ผู้ติดตาม</small>
                                                        </div>
                                                        
                                                        <div className="vr"></div>
                                                        
                                                        <div>
                                                            <h6 className="mb-0">365</h6>
                                                            <small>Following</small>
                                                        </div>

                                                        <div className="vr"></div>

                                                        <div>
                                                            <h6 className="mb-0">256</h6>
                                                            <small>Post</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <hr />
                                                
                                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/my-profile.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/blog.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/earth-outline-filled.svg" alt="" /><span>Latest News </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/events.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/calendar-outline-filled.svg" alt="" /><span>Events </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/groups.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/chat-outline-filled.svg" alt="" /><span>Groups </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/notifications.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="https://social.webestica.com/settings.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/cog-outline-filled.svg" alt="" /><span>Settings </span></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-footer text-center py-2">
                                                <Link className="btn btn-link btn-sm" to="https://social.webestica.com/my-profile.html">View Profile </Link>
                                            </div>
                                        </div>
                                        <ul className="nav small mt-4 justify-content-center lh-1">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="https://social.webestica.com/my-profile-about.html">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="https://social.webestica.com/settings.html">Settings</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" target="_blank" to="https://social.webestica.com/docs/index.html">Docs </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="https://social.webestica.com/help.html">Help</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="https://social.webestica.com/privacy-and-terms.html">Privacy &amp; terms</Link>
                                            </li>
                                        </ul>
                                        <p className="small text-center mt-1">©2022 <Link className="text-body" target="_blank" to="https://www.webestica.com/"> Webestica </Link></p>
                                    </div>
                                </div>
                        </nav>
                    </div>
                    {/* post a story */}
                        <Story />
                    {/* close post a story */}
                    <div className="col-lg-3 ">
                        <div className="row g-4 ">
                        <div  className="col-sm-6 col-lg-12 ">
                            <div  className="card " style={{filter: 'drop-shadow(9px 12px 16px black)',}}>
                                <div  className="card-header pb-0 border-0 " style={{ background: '#000',color: '#fff'}}>
                                    <h5  className="card-title mb-0 text-white">Board way</h5></div><div  className="card-body " style={{
                                            background: 'rgba(0,0,0,0.0.8)',
                                        }}>
                        <div  className="hstack mb-3 ">
                        <div>
                            <a href="https://social.webestica.com/index.html#!">
                                <img style={{width:'350', height:'60'}} src="./src/assets/images/brandners/01.png " alt=" " />
                            </a>
                        </div>
                    </div>
                    <div  className="hstack gap-2 mb-3 ">
                        <div>
                            <a href="https://social.webestica.com/index.html#!"> 
                                <img style={{width:'350', height:'60'}} src="./src/assets/images/brandners/02.png" alt=" "  />
                            </a>
                        </div>
                    </div>
                    <div  className="hstack gap-2 mb-3 ">
                        <div  className="avatar ">
                            <a href="https://social.webestica.com/index.html# "> 
                                <img  className="avatar-img" src="./src/assets/images/11.jpg " alt=" " />
                            </a>
                        </div>
                    <div  className="overflow-hidden ">
                        <a  className="h6 mb-0 " href="https://social.webestica.com/index.html#! ">Billy Vasquez </a>
                        <p  className="mb-0 small text-truncate ">News anchor</p>
                    </div>
                    <a  className="btn btn-primaryicon-md ms-auto " href="https://social.webestica.com/index.html# "><i  className="bi bi-person-check-fill "> </i></a>
                    </div>
                    <div  className="hstack gap-2 mb-3 ">
                        <div  className="avatar "><a href="https://social.webestica.com/index.html# "> <img  className="avatar-img" src="./src/assets/images/01.jpg " alt=" " /> </a></div><div  className="overflow-hidden "><a  className="h6 mb-0 " href="https://social.webestica.com/index.html#! ">Lori Ferguson </a><p  className="mb-0 small text-truncate ">Web Developer at Webestica</p></div><a  className="btn btn-primary-softicon-md ms-auto " href="https://social.webestica.com/index.html# "><i  className="fa-solid fa-plus "> </i></a></div><div  className="hstack gap-2 mb-3 "><div  className="avatar "><a href="https://social.webestica.com/index.html# "> <img  className="avatar-img" src="./src/assets/images/placeholder.jpg " alt=" " /> </a></div>
                        <div  className="overflow-hidden ">
                            <a  className="h6 mb-0 " href="https://social.webestica.com/index.html#! ">Carolyn Ortiz </a>
                            <p  className="mb-0 small text-truncate ">News anchor</p>
                        </div>
                        <a  className="btn btn-primary-softicon-md ms-auto " href="https://social.webestica.com/index.html# "><i  className="fa-solid fa-plus "> </i></a>
                        </div>
                        <div  className="d-grid mt-3 ">
                            <a  className="btn btn-sm btn-primary-soft " href="https://social.webestica.com/index.html#! ">View more</a></div></div></div></div>
                            
                            <div className="col-sm-6 col-lg-12 ">
                                <div className="card ">
                                    
                                    <div className="card-header pb-0 border-0 ">
                                        <h5 className="card-title mb-0 ">Who to follow</h5>
                                    </div>
                                    
                                    
                                    <div className="card-body ">
                                        <div className="hstack gap-2 mb-3 ">
                                            <div className="avatar ">
                                                <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img" src="./src/assets/images/04.jpg " alt=" " /></Link>
                                            </div>
                                            <div className="overflow-hidden ">
                                                <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Judy Nguyen </Link>
                                                <p className="mb-0 small text-truncate ">News anchor</p>
                                            </div>
                                            <Link className="btn btn-primary-softicon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                        </div>
                                        <div className="hstack gap-2 mb-3 ">
                                            <div className="avatar avatar-story ">
                                                <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img" src="./src/assets/images/05.jpg " alt=" " /> </Link>
                                            </div>
                                            <div className="overflow-hidden ">
                                                <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Amanda Reed </Link>
                                                <p className="mb-0 small text-truncate ">Web Developer</p>
                                            </div>
                                            <Link className="btn btn-primary-softicon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                        </div>
                                        
                                        
                                        <div className="hstack gap-2 mb-3 ">
                                            
                                            <div className="avatar ">
                                                <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img" src="./src/assets/images/11.jpg " alt=" " /> </Link>
                                            </div>
                                            
                                            <div className="overflow-hidden ">
                                                <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Billy Vasquez </Link>
                                                <p className="mb-0 small text-truncate ">News anchor</p>
                                            </div>
                                            
                                            <Link className="btn btn-primaryicon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="bi bi-person-check-fill "> </i></Link>
                                        </div>
                                        

                                        
                                        <div className="hstack gap-2 mb-3 ">
                                            <div className="avatar ">
                                                <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img" src="./src/assets/images/01.jpg " alt=" " /> </Link>
                                            </div>
                                            <div className="overflow-hidden ">
                                                <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Lori Ferguson </Link>
                                                <p className="mb-0 small text-truncate ">Web Developer at Webestica</p>
                                            </div>
                                            <Link className="btn btn-primary-softicon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                        </div>
                                        
                                        <div className="hstack gap-2 mb-3 ">
                                            <div className="avatar ">
                                                <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img" src="./src/assets/images/placeholder.jpg " alt=" " /> </Link>
                                            </div>
                                            <div className="overflow-hidden ">
                                                <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Carolyn Ortiz </Link>
                                                <p className="mb-0 small text-truncate ">News anchor</p>
                                            </div>
                                            <Link className="btn btn-primary-softicon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                        </div>
                                        

                                        
                                        <div className="d-grid mt-3 ">
                                            <Link className="btn btn-sm btn-primary-soft " to="https://social.webestica.com/index.html#! ">View more</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="col-sm-6 col-lg-12 ">
                                <div className="card ">
                                    
                                    <div className="card-header pb-0 border-0 ">
                                        <h5 className="card-title mb-0 ">Today’s news</h5>
                                    </div>
                                    
                                    
                                    <div className="card-body ">
                                        
                                        <div className="mb-3 ">
                                            <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Ten questions you should answer truthfully</Link></h6>
                                            <small>2hr</small>
                                        </div>
                                        
                                        <div className="mb-3 ">
                                            <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Five unbelievable facts about money</Link></h6>
                                            <small>3hr</small>
                                        </div>
                                        
                                        <div className="mb-3 ">
                                            <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Best Pinterest Boards for learning about business</Link></h6>
                                            <small>4hr</small>
                                        </div>
                                        
                                        <div className="mb-3 ">
                                            <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Skills that you can learn from business</Link></h6>
                                            <small>6hr</small>
                                        </div>
                                        
                                        <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                                            <div className="spinner-dots me-2 ">
                                                <span className="spinner-dot "></span>
                                                <span className="spinner-dot "></span>
                                                <span className="spinner-dot "></span>
                                            </div>
                                            View all latest news
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    
  )
}

export default Home
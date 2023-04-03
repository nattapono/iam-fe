import React from 'react'
import {Link} from 'react-router-dom'

function StoryFeeds() {
  return (
    <>
        {/* Post Image */}
        <div className="card ">
            <div className="card-header border-0 ">
                <div className="d-flex align-items-center justify-content-between ">
                    <div className="d-flex align-items-center ">
                        
                        <div className="avatar avatar-story me-2 ">
                            <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img" src="./src/assets/images/04.jpg " alt=" " /> </Link>
                        </div>
                        
                        <div>
                            <div className="nav nav-divider ">
                                <h6 className="nav-item card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Lori Ferguson </Link></h6>
                                <span className="nav-item small "> 2hr</span>
                            </div>
                            <p className="mb-0 small ">Web Developer at Webestica</p>
                        </div>
                    </div>
                    
                    <div className="dropdown ">
                        <Link to="# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardFeedAction " data-bs-toggle="dropdown " aria-expanded="false ">
                            <i className="bi bi-three-dots "></i>
                        </Link>
                        
                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardFeedAction ">
                            <li>
                                <Link className="dropdown-item " to="# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider " />
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
            
            <div className="card-body ">
                <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                
                <img className="card-img " src="./src/assets/images/01(1).jpg " alt="Post " />
                
                <ul className="nav nav-stack py-3 small ">
                    <li className="nav-item ">
                        <Link className="nav-link active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-hand-thumbs-up-fill pe-1 "></i>Liked (56)</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                    </li>
                    
                    <li className="nav-item dropdown ms-sm-auto ">
                        <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html# " id="cardShareAction " data-bs-toggle="dropdown " aria-expanded="false ">
                            <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                        </Link>
                        
                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction ">
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider " />
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
                

                
                <div className="d-flex mb-3 ">
                    
                    <div className="avatar avatar-xs me-2 ">
                        <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img" src="./src/assets/images/12.jpg " alt=" " /> </Link>
                    </div>
                    
                    <form className="w-100 ">
                        <textarea data-autoresize=" " className="form-control pe-4 bg-light " rows="1 " placeholder="Add a comment... "></textarea>
                    </form>
                </div>
                
                <ul className="comment-wrap list-unstyled ">
                    
                    <li className="comment-item ">
                        <div className="d-flex position-relative ">
                            
                            <div className="avatar avatar-xs ">
                                <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img" src="./src/assets/images/05.jpg " alt=" " /></Link>
                            </div>
                            <div className="ms-2 ">
                                
                                <div className="bg-light rounded-start-top-0 p-3 rounded ">
                                    <div className="d-flex justify-content-between ">
                                        <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link></h6>
                                        <small className="ms-2 ">5hr</small>
                                    </div>
                                    <p className="small mb-0 ">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>
                                
                                <ul className="nav nav-divider py-2 small ">
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (3)</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 5 replies</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <ul className="comment-item-nested list-unstyled ">
                            
                            <li className="comment-item ">
                                <div className="d-flex ">
                                    
                                    <div className="avatar avatar-xs ">
                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img" src="./src/assets/images/06.jpg " alt=" " /></Link>
                                    </div>
                                    
                                    <div className="ms-2 ">
                                        <div className="bg-light p-3 rounded ">
                                            <div className="d-flex justify-content-between ">
                                                <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Lori Stevens </Link> </h6>
                                                <small className="ms-2 ">2hr</small>
                                            </div>
                                            <p className="small mb-0 ">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                        </div>
                                        
                                        <ul className="nav nav-divider py-2 small ">
                                            <li className="nav-item ">
                                                <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (5)</Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            
                            <li className="comment-item ">
                                <div className="d-flex ">
                                    
                                    <div className="avatar avatar-story avatar-xs ">
                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img" src="./src/assets/images/07.jpg " alt=" " /></Link>
                                    </div>
                                    
                                    <div className="ms-2 ">
                                        <div className="bg-light p-3 rounded ">
                                            <div className="d-flex justify-content-between ">
                                                <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Billy Vasquez </Link> </h6>
                                                <small className="ms-2 ">15min</small>
                                            </div>
                                            <p className="small mb-0 ">Wishing calling is warrant settled was lucky.</p>
                                        </div>
                                        
                                        <ul className="nav nav-divider py-2 small ">
                                            <li className="nav-item ">
                                                <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like</Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                        
                        <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5 " data-bs-toggle="button " aria-pressed="true ">
                            <div className="spinner-dots me-2 ">
                                <span className="spinner-dot "></span>
                                <span className="spinner-dot "></span>
                                <span className="spinner-dot "></span>
                            </div>
                            Load more replies
                        </Link>
                        
                    </li>
                    
                    
                    <li className="comment-item ">
                        <div className="d-flex ">
                            
                            <div className="avatar avatar-xs ">
                                <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img" src="./src/assets/images/05.jpg " alt=" " /></Link>
                            </div>
                            
                            <div className="ms-2 ">
                                <div className="bg-light p-3 rounded ">
                                    <div className="d-flex justify-content-between ">
                                        <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link> </h6>
                                        <small className="ms-2 ">4min</small>
                                    </div>
                                    <p className="small mb-0 ">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>
                                
                                <ul className="nav nav-divider pt-2 small ">
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (1)</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 6 replies</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    
                </ul>
                
            </div>
            
            
            <div className="card-footer border-0 pt-0 ">
                
                <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                    <div className="spinner-dots me-2 ">
                        <span className="spinner-dot "></span>
                        <span className="spinner-dot "></span>
                        <span className="spinner-dot "></span>
                    </div>
                    Load more comments
                </Link>
            </div>
                        
        </div>

        {/* Post Spost AND Org */}
        <div className="card ">
                        
            <div className="card-header ">
                <div className="d-flex align-items-center justify-content-between ">
                    <div className="d-flex align-items-center ">
                        
                        <div className="avatar me-2 ">
                            <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img" src="./src/assets/images/12.svg " alt=" " /> </Link>
                        </div>
                        
                        <div>
                            <h6 className="card-title mb-0 "><Link to="https://social.webestica.com/index.html#! "> Bootstrap: Front-end framework </Link></h6>
                            <Link to="https://social.webestica.com/index.html#! " className="mb-0 text-body ">Sponsored <i className="bi bi-info-circle ps-1 " data-bs-container="body " data-bs-toggle="popover " data-bs-placement="top
                                    " data-bs-content="You&#39;re seeing this ad because your activity meets the intended audience of our site. " data-bs-original-title=" " title=" "></i> </Link>
                        </div>
                    </div>
                    
                    <div className="dropdown ">
                        <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction2 " data-bs-toggle="dropdown " aria-expanded="false ">
                            <i className="bi bi-three-dots "></i>
                        </Link>
                        
                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction2 ">
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider " />
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="card-body ">
                <p className="mb-0 ">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
            </div>
            <img src="./src/assets/images/02(1).jpg " alt=" " />
            
            
            <div className="card-footer border-0 d-flex justify-content-between align-items-center ">
                <p className="mb-0 ">Currently v5.1.3 </p>
                <Link className="btn btn-primary-soft btn-sm " to="https://social.webestica.com/index.html# "> Download now </Link>
            </div>
                        

        </div>

        {/* Pot Fellling */}
        <div className="card ">
            
            <div className="card-header border-0 pb-0 ">
                <div className="d-flex align-items-center justify-content-between ">
                    <div className="d-flex align-items-center ">
                        
                        <div className="avatar me-2 ">
                            <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img" src="./src/assets/images/13.svg " alt=" " /> </Link>
                        </div>
                        
                        <div>
                            <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Apple Education </Link></h6>
                            <p className="mb-0 small ">9 November at 23:29</p>
                        </div>
                    </div>
                    
                    <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction5 " data-bs-toggle="dropdown " aria-expanded="false ">
                        <i className="bi bi-three-dots "></i>
                    </Link>
                    
                    <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction5 ">
                        <li>
                            <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider " />
                        </li>
                        <li>
                            <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            

            
            <div className="card-body pb-0 ">
                <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start recognition your first Apple Teacher badge today!</p>
                
                <ul className="nav nav-stack pb-2 small ">
                    <li className="nav-item ">
                        <Link className="nav-link active text-secondary " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white"></i> Louis, Billy and 126 others </Link>
                    </li>
                    <li className="nav-item ms-sm-auto ">
                        <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                    </li>
                </ul>
                
            </div>
            
            
            <div className="card-footer py-3 ">
                
                <ul className="nav nav-fill nav-stack small ">
                    <li className="nav-item ">
                        <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                    </li>
                    
                    <li className="nav-item dropdown ">
                        <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="cardShareAction6 " data-bs-toggle="dropdown " aria-expanded="false ">
                            <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                        </Link>
                        
                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction6 ">
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider " />
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="nav-item ">
                        <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                    </li>
                </ul>
                
            </div>
            
        </div>

        {/* reel reccomments */}
        <div className="card ">
                    
            <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0 ">
                <h6 className="card-title mb-0 ">People you may know</h6>
                <button className="btn btn-sm btn-primary-soft "> See all </button>
            </div>
            
    
            
            <div className="card-body ">
                <div className="tiny-slider arrow-hover ">
                    <div className="tns-outer " id="tns2-ow ">
                        <div className="tns-liveregion tns-visually-hidden " aria-live="polite " aria-atomic="true ">slide <span className="current ">11 to 15</span> of 4</div>
                        <div id="tns2-mw " className="tns-ovh ">
                            <div className="tns-inner " id="tns2-iw ">
                                <div className="tiny-slider-inner ms-n4 tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal " id="tns2 " style={{transform: 'translate3d(-61.1111%, 0px, 0px)' }}>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-story avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html "> Larry Lawson </Link></h6>
                                                <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-story avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="tns-item " id="tns2-item0 " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item " id="tns2-item1 " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-story avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item " id="tns2-item2 " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-active mx-1" id="tns2-item3 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-story avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-story avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                        
                                        <div className="card shadow-none text-center ">
                                            
                                            <div className="card-body p-2 pb-0 ">
                                                <div className="avatar avatar-xl ">
                                                    <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                </div>
                                                <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                            </div>
                                            
                                            <div className="card-footer p-2 border-0 ">
                                                <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tns-controls " aria-label="Carousel Navigation " tabindex="0 "><button type="button " data-controls="prev " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-left"></i></button><button type="button " data-controls="next " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-right "></i></button></div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    
  )
}

export default StoryFeeds
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function StoryPost() {
    const [modalImage, getModalImage] = React.useState(false);
    const [modalVideo, getModalVideo] = React.useState(false);
    const [modalFelling, getModalFelling] = React.useState(false);

    return (
        <>
            <div className="card card-body ">
                <div className="d-flex mb-3 ">
                    <hr className='hr-line' />
                    <small style={{position:'absolute',marginTop:'-15px',fontSize:'10px',marginLeft:'45px'}}>Post Activity</small>
                    <div className="avatar avatar-xs me-2 ">
                        <Link to="/profile"> <img className="avatar-img" src="./src/assets/images/03.jpg " alt=" " /> </Link>
                    </div>
                    <form className="w-100 ">
                        <textarea className="form-control pe-4 border-dashed " rows="2 " data-autoresize=" " placeholder="Share your thoughts... "></textarea>
                    </form>
                </div>
                
                <ul className="nav nav-pills nav-stack small fw-normal ">
                    <li className="nav-item ">
                        <Link 
                            className="nav-link bg-light py-1 mb-0 text-uppercase" 
                            to="#" 
                            onClick={()=>getModalImage(true)}
                        >
                            <i className="bi bi-image-fill text-success pe-2 bi-hov"></i>
                            Photo
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link bg-light py-1 mb-0 " to="#" 
                            onClick={()=>getModalVideo(true)}
                        > 
                        <i className="bi bi-camera-reels-fill text-info pe-2 bi-hov"></i>
                        Video</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="#" className="nav-link bg-light py-1 mb-0" 
                            onClick={()=>getModalFelling(true)}> 
                        <i className="bi bi-calendar2-event-fill text-danger pe-2 bi-hov"></i>
                        Event </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link bg-light py-1 mb-0 border " to="https://social.webestica.com/index.html#! " data-bs-toggle="modal " data-bs-target="#modalCreateFeed "> 
                        {/* <i className="bi bi-emoji-smile-fill text-warning pe-2 "></i> */}
                        Feeling /Activity</Link>
                    </li>
                    <li className="dropdown ms-sm-auto ">
                        <Link to="# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardFeedAction " data-bs-toggle="dropdown " aria-expanded="false ">
                            <i className="bi bi-three-dots "></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="feedActionShare ">
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Create a poll</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Ask a question </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider " />
                            </li>
                            <li>
                                <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Help</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Modal Image Upload Post */}
            {modalImage ? (
                <div className="modal fade show" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={()=>getModalImage(false)}
                                ></button>
                            </div>
                            <div className="modal-body">                                
                                <div className="d-flex mb-3">                                    
                                    <div className="avatar avatar-xs me-2">
                                        <img className="avatar-img rounded-circle" src="../src/assets/images/avatar/03.jpg" alt="" />
                                    </div>
                                    <form className="w-100">
                                        <textarea className="form-control pe-4 fs-3 lh-1 border-dashed" rows="2" placeholder="Share your thoughts..."></textarea>
                                    </form>
                                </div>
                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none dz-clickable text-center py-4" data-dropzone="{&quot;maxFiles&quot;:2}">
                                        <div className="dz-message text-white">
                                            <i className="bi bi-images display-3"></i>
                                            <p>Drag here or click to upload photo.</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn simp-btn-close me-2 border" onClick={()=>getModalImage(false)}>Cancel</button>
                                <button type="button" className="btn border px-4 simp-btn">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            ):''}

            {/* Modal Video Upload Post */}
            {modalVideo ? (
                <div className="modal fade show" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="feedActionVideoLabel">Add post video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={()=>getModalVideo(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex mb-3">
                                    <div className="avatar avatar-xs me-2">
                                        <img className="avatar-img rounded-circle" src="../src/assets/images/avatar/03.jpg" alt="" />
                                    </div>
                                    <form className="w-100">
                                        <textarea className="form-control pe-4 fs-3 lh-1 border-dashed" rows="2" placeholder="Share your thoughts..."></textarea>
                                    </form>
                                </div>
                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none dz-clickable text-center py-4" data-dropzone="{&quot;maxFiles&quot;:2}">
                                        <div className="dz-message text-white">
                                            <i className="bi bi-camera-reels display-3"></i>
                                            <p>Drag here or click to upload video.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">                                
                                <button type="button" className="btn btn-danger-soft border me-2"><i className="bi bi-camera-video-fill pe-1"></i> Live video</button>
                                <button type="button" className="btn btn-dark-soft border px-4">Post</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            ):''}

            {/* Modal Felling Post */}
            {modalFelling ? (
                <div className="modal fade show" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabelCreateFeed">Create post</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>getModalFelling(false)}></button>
                            </div>
                            
                            <div className="modal-body">
                                <div className="d-flex mb-3">
                                    <div className="avatar avatar-xs me-2">
                                        <img className="avatar-img rounded-circle" src="../src/assets/images/avatar/03.jpg" alt="" />
                                    </div>
                                    
                                    <form className="w-100">
                                        <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows="4" placeholder="Share your thoughts..." autofocus=""></textarea>
                                    </form>
                                </div>

                                <div className="hstack gap-2">
                                    <a className="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Photo" data-bs-original-title="Photo"> <i className="bi bi-image-fill"></i> </a>
                                    <a className="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Video" data-bs-original-title="Video"> <i className="bi bi-camera-reels-fill"></i> </a>
                                    <a className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Events" data-bs-original-title="Events"> <i className="bi bi-calendar2-event-fill"></i> </a>
                                    <a className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Feeling/Activity" data-bs-original-title="Feeling/Activity"> <i className="bi bi-emoji-smile-fill"></i> </a>
                                    <a className="icon-md bg-light text-secondary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Check in" data-bs-original-title="Check in"> <i className="bi bi-geo-alt-fill"></i> </a>
                                    <a className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Tag people on top" data-bs-original-title="Tag people on top"> <i className="bi bi-tag-fill"></i> </a>
                                </div>
                            </div>
                            
                            <div className="modal-footer row justify-content-between">
                                <div className="col-lg-3">
                                    <div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-select js-choice choice-select-text-none choices__input" data-position="top" data-search-enabled="false" hidden="" tabindex="-1" data-choice="active"><option value="PB" data-custom-properties="[object Object]">Public</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="PB" data-custom-properties="[object Object]" aria-selected="true">Public</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--c3ae-item-choice-1" className="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="PV" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Custom</div><div id="choices--c3ae-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="PV" data-select-text="Press to select" data-choice-selectable="">Friends</div><div id="choices--c3ae-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="PV" data-select-text="Press to select" data-choice-selectable="">Only me</div><div id="choices--c3ae-item-choice-4" className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="4" data-value="PB" data-select-text="Press to select" data-choice-selectable="">Public</div></div></div></div>
                                </div>
                                <div className="col-lg-8 text-sm-end">
                                    <button type="button" className="btn btn-danger-soft me-2"> <i className="bi bi-camera-video-fill pe-1"></i> Live video</button>
                                    <button type="button" className="btn btn-success-soft">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):''}
        </>
    )
}

export default StoryPost
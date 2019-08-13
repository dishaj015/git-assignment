import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getRepoDetails} from '../action/index';

class RepoComponent extends Component{
    constructor(props){
        super(props);
        this.state={
          data:""
        }    
    }
    componentDidMount(){
        var name = localStorage.getItem('repoName');
        this.props.getRepoDetails(name,this.props.match.params.id);
    }


 //render     
render(){

    return(
      <div className="search-page mt-5">
      {/* container */}
        <div className="container">
        {/* row */}
          <div className="row">
          {/* col */}
            <div className="offset-md-1 col-md-10" >
          <div>
        <div className="container">
              <div className="top-bar p-1"> Open issues</div>
        <div className="m-auto">
            <div className="Box">
                <div className="table-list-header-toggle states flex-auto pl-0">
                 <div className="Box-row w-100 Box-row--focus-gray p-0 mt-0navigation-focus">
                        <div
                            className="d-table table-fixed w-100  width-full Box-row--drag-hide position-relative">
                            <div className="float-left pt-2 pl-3">
                                <i className="fa fa-info-circle text-success" aria-hidden="true"></i>
                            </div>
                            <div className="float-left col-8 lh-condensed p-2">
                                <a className="link-gray-dark v-align-middle no-underline h4 js-navigation-open"
                                    href="/" title={this.props.repoDetails.title} data-toggle="popover" data-trigger="hover" data-content={this.props.repoDetails.body}><b>
                                    {this.props.repoDetails.title} </b></a>
                                   
                                <div className="mt-1 text-small text-gray">
                                    <span className="opened-by">
                                        #{this.props.repoDetails.number} opened
                                        <relative-time
                                            datetime="2019-08-08T19:03:21Z"
                                            title="Aug 9, 2019, 12:33 AM GMT+5:30">&nbsp;{new Date(this.props.repoDetails.created_at).getDay()} days ago</relative-time>
                                        
                                    </span>
                                    <span className="issue-meta-section css-truncate issue-milestone ml-2"></span>
                                </div>
                            </div>
                            <div className="float-right col-3">
                            <div className="float-right col-6 no-wrap pt-2 pr-3 text-right">
                                    <a  href="/" className="muted-link">
                                            <i className="fa fa-comment-o"></i>
                                        <span className="text-small text-bold">&nbsp;{this.props.repoDetails.comments}</span>
                                    </a>
                                </div>
                                <div className="float-right col-6 no-wrap pt-2 pr-3 text-right"></div>
                               
                            </div>
                           
                        </div>
                        <div class="mx-5 mb-3">
                            {this.props.repoDetails.body}
                        </div>
                    </div>
                 
                </div>
                        
                </div>
            </div>
            </div> 
  </div>
  {/* form ends */}

</div>
 {/* col ends */}
</div>
 {/* row ends */}
</div>
 {/* container ends */}
</div>
//   search page ends
    )
}
}

//mapStateToProps
function mapStateToProps(state){
  return {
      repoDetails:state.repo.repoDetails
        }
}

export default connect(mapStateToProps,{getRepoDetails})(RepoComponent);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getRepoList} from '../action/index';
import NavLink from 'react-router-dom/NavLink';
import 'react-dropdown/style.css';

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state={
          data:"",
          total:this.props.repoList.length,
          selectValue:'',
          repoData:this.props.repoList
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        
    }
    
      //onChange method
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });       
      }

      getDateValue(repo,d){
    let  date, dd, mm, yy;

      date = new Date(d);
      dd = date.getDate();
      mm = date.getMonth() + 1;
      yy = date.getFullYear();
  
    var data = mm + "/" + dd +"/" + yy;
    var current_date =new Date().getMonth()+ 1 + '/' + new Date().getDate() + '/' + new Date().getFullYear();
    const date1 = new Date(data);
const date2 = new Date(current_date);
const diffTime = Math.abs(date2.getTime() - date1.getTime());
var value = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

repo['day'] = value;

return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  }
      //handle change
      handleChange(){
        const {selectValue} =this.state;
        console.log("value",JSON.stringify(this.state.repoData))
        if(selectValue === 'created_at'){
         
        function custom_sort(a, b) {
          console.log("day",a.day);
          return b.day - a.day;
      }
      this.state.repoData.sort(custom_sort);
      console.log("dtaacc",JSON.stringify(this.state.repoData))

    }else if(selectValue === 'comments'){
      function custom_sort(a, b) {
        return b.comments - a.comments;
    }
    this.state.repoData.sort(custom_sort);
    } else if(selectValue === 'last_updated'){
    function custom_sort(a, b) {
       return a.day - b.day;
    
  }
  this.state.repoData.sort(custom_sort);
  console.log("dtaaccijiio",JSON.stringify(this.state.repoData))
}

this.setState({
  repoData:this.state.repoData
})

      }
      //onSubmit method
      onSubmit(e) {
        const {data} =this.state;
      e.preventDefault();
      this.props.getRepoList(data);
       localStorage.setItem("repoName",data);
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
            {/* card */}
        <div className="card p-3">
          {/* form */}

         <div className="row">
           {/* search */}
         <div className="col-md-6">
          <form className="ml-3" onSubmit={(e) => this.setState({ repoData:
        !this.props.isShow?this.props.repoList:this.state.repoData},this.onSubmit(e))}>
           <div className="form-group">
           
            <label htmlFor="search">Search Repo</label>
            <div className="d-flex">
              <input type="text" className="form-control"
               value={this.state.data}
               name="data"
               onChange={this.onChange}
               placeholder="Search Repo"/>
               <button type="submit" className="btn btn-primary ml-3" >OK</button>
               </div>
              </div>
          </form>
 
          </div>
        {/* search end */}
          {/* filter */}
          <div className="col-md-6">
          <label htmlFor="search">Filter</label>
          <select className="form-control" value={this.state.selectValue} onChange={(e) => this.setState({ selectValue : e.target.value, repoData:
        !this.props.isShow?this.props.repoList:this.state.repoData},this.handleChange)}>
       <option value="select">Select</option>
      <option value="created_at">Created At</option>
      <option value="comments">No of comments</option>
       <option value="last_updated">Last Updated</option>


    </select>
          </div>
          {/* filter ends*/}
          </div>
          <div>
      
  {this.state.repoData.length > 0 && !this.props.isShow ?
          <div className="container">
              <div className="top-bar p-1">{this.state.repoData.length} Open issues</div>
        <div className="m-auto">
            <div className="Box">
                <div className="table-list-header-toggle states flex-auto pl-0">
  
                {this.state.repoData.map((repo,i)=>{
                   return <div className="Box-row w-100 Box-row--focus-gray p-0 mt-0navigation-focus">
                        <div
                            className="d-table table-fixed w-100  width-full Box-row--drag-hide position-relative">
                            <div className="float-left pt-2 pl-3">
                                <i className="fa fa-info-circle text-success" aria-hidden="true"></i>
                            </div>
                            <div className="float-left col-8 lh-condensed p-2">
                                <NavLink
                                    className="link-gray-dark v-align-middle no-underline h4 js-navigation-open"
                                    to={`/repo/details/${repo.number}`} title={repo.title} data-toggle="popover" data-trigger="hover" data-content={repo.body}><b>
                                    {repo.title} </b></NavLink>
                                    <NavLink to="/">{repo.labels.length >0 ? 
                                    repo.labels.map((data)=>{
                                      return <span className=" p-1" style={{color:data.color}}>{data.name}</span>
                                    })
                              
                                     :''}</NavLink>
                                <div className="mt-1 text-small text-gray">
                                    <span className="opened-by">
                                        #{repo.number} opened
                                        <relative-time
                                            datetime="2019-08-08T19:03:21Z"
                                            title="Aug 9, 2019, 12:33 AM GMT+5:30">&nbsp;{this.getDateValue(repo,repo.created_at)} days ago</relative-time>
                                        &nbsp;by
                                        <a
                                            className="link"
                                            title="Open issues created by XhmikosR"
                                            data-hovercard-type="user"
                                            data-hovercard-url="/hovercards?user_id=349621"
                                            data-octo-click="hovercard-link-click"
                                            data-octo-dimensions="link_type:self"
                                            href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aopen+author%3AXhmikosR"> &nbsp; {repo.user.login}</a>
                                    </span>
                                    <span className="issue-meta-section css-truncate issue-milestone ml-2"></span>
                                </div>
                            </div>
                            <div className="float-right col-3">
                            <div className="float-right col-6 no-wrap pt-2 pr-3 text-right">
                                    <a  href="/" className="muted-link">
                                            <i className="fa fa-comment-o"></i>
                                        <span className="text-small text-bold">&nbsp;{repo.comments}</span>
                                    </a>
                                </div>
                                <div className="float-right col-6 no-wrap pt-2 pr-3 text-right"></div>
                            </div>
                        </div>
                    </div>
                  })}
                </div>
                        
                </div>
            </div>
            </div> :
               this.props.isShow ?
            <div className="show-message text-center m-5">Data is Not Avalilable</div>:''
            }
  </div>
  {/* form ends */}
</div>

 {/* card  ends */}
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
      repoList :state.repo.repoList,
      isShow: state.repo.isShow
        }
}

export default connect(mapStateToProps,{getRepoList})(SearchComponent);
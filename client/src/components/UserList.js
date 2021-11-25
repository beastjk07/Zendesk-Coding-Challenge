import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../static/UserList.css'
import { MyVerticallyCenteredModal } from './MyVerticallyCenteredModal';

export class UserList extends Component {

  constructor(props) {
        super(props);
        this.state = {
          tickets: [],
          storeTicket: [],
          offset: 0,
          perPage: 25,
          flag: 0,
          currentPage: 0,
          modalShow : false,
          ticket: {},
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleonClick = this.handleonClick.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    renderData(){
      const slice = this.state.tickets.slice(this.state.offset, this.state.offset + this.state.perPage)
      const postData = slice.map(user => 
                <React.Fragment>
                  <tr key = {user.id} onClick = {() => this.handleModal(user.id)}>
                    <td>{user.id}</td>
                    <td>{user.subject}</td>
                    <td>{user.requester_id}</td>
                    <td>{new Intl.DateTimeFormat("en-GB").format(new Date(user.created_at))}</td>
                    <td>{user.status}</td>
                  </tr>
                </React.Fragment>)
                this.setState({
            pageCount: Math.ceil(this.state.tickets.length / this.state.perPage), postData
        })
  }

  async handleModal(id){

    await axios
      .get(`http://localhost:3000/id`,{ 
        params: {
          ticketId: id
        }
      })
      .then((res) => this.setState({ticket: res.data.ticket}))
      .catch((err) => alert(`Error loading ticket ${id} data`));
      console.log(this.state.ticket);
      this.setState({modalShow: true})

  }
  async handleonClick(e){
    e.preventDefault()
    this.setState({ flag : 1 })
    this.setState({tickets: this.state.tickets.sort((a, b) => b.id > a.id ? 1 : -1)}) 
    this.renderData()
  }
  
  async handleonRefresh(e){
    this.receivedData()
  }

  async handleOnChange(e) {
    await this.setState({tickets: this.state.storeTicket})
    const sub = e.target.value
    this.setState({ flag : 1 })
    this.setState({tickets: this.state.tickets.filter(o => o.subject.toLowerCase().includes(sub.toLowerCase()))})
    this.renderData()
  }

  receivedData(){
    axios.get(`http://localhost:3000`)
    .then(res => {
      let tickets = res.data.tickets;
      this.setState({ tickets });
      this.setState({storeTicket: tickets})
      this.renderData()
    })
}

  componentDidMount() {
    this.receivedData()
  }

  handlePageClick(e) {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    if (this.state.flag === 1){
      this.setState({
        currentPage: selectedPage,
        offset: offset}, () => {
        this.renderData()
      });
    }
    else{
    this.setState({
      currentPage: selectedPage,
      offset: offset}, () => {
      this.receivedData()
    });
  }
};

  render() {
    console.log("rendered");
    return (
      <div className="container">
          <h2>List of Tickets</h2>
          <hr />
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">        
                      <label className = 'users'> Search by subject : </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">Subject</span>
                        </div>
                        <input onChange = {this.handleOnChange} type="text" class="form-control" placeholder="xyz abc" aria-label="Username" aria-describedby="basic-addon1"></input>
                      </div>

                      {/* <input type="text"  class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input> */}
                      {/* <input type="text" ></input> */}
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn btn-success" onClick = {this.handleonClick}>Sort UserList</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-warning" onClick = {this.handleonRefresh}>Refresh</button>
              </div>  
            </div>
          </form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Requester ID</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            {this.state.postData}
          </table>
          { this.state.modalShow && <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={() => this.setState( {modalShow: false})}
            ticket = {this.state.ticket}
          />}
          <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>
    )
  }
}

export default UserList

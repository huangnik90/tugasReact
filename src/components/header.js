import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
  import {Link} from 'react-router-dom'  
  import {connect} from 'react-redux'
  import Kokie from 'universal-cookie'
  import {resetUser} from '../1.actions/userAction'

  const kokie = new Kokie()

class Header extends React.Component {
  signOut = ()=>{
    kokie.remove("userData")
    this.props.resetUser()
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    if(this.props.user!==""){
      return(
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
            <span style={{fontSize: "33px", color: "Dodgerblue"}}>
            <i class="fab fa-fulcrum"> Ultimate Coretan {this.props.user} {this.props.role} </i>
            </span>   
            
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                 <NavLink>{this.props.todo} Todo List<i class="fas fa-check"></i></NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/movie"><NavLink><i class="fas fa-atom"/> Movie</NavLink></Link>
                </NavItem>
                {this.props.role ==="admin"?
                <NavItem>
                  <Link to="/manageproduct"><NavLink><i class="fas fa-atom"/> Manage Product</NavLink></Link>
                </NavItem>:null}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <i class="fas fa-briefcase">   Tugas</i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/Todo">Todo List App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/HitungKata">WordCount App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/movie">Search Movie App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/Todo2">Todo Ver. Mas Fikri</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.signOut}>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

      )
    }else{
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
            <span style={{fontSize: "33px", color: "Dodgerblue"}}>
            <i class="fab fa-fulcrum"> Ultimate Coretan {this.props.user} </i>
            </span>   
            
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                 <NavLink>{this.props.todo} Todo List<i class="fas fa-check"></i></NavLink>
                </NavItem>
  
                <NavItem>
                 <Link to="/Login"><NavLink><i class="fas fa-sign-in-alt"/> Login</NavLink></Link> 
                </NavItem>
                <NavItem>
                  <Link to="/Register"><NavLink><i class="fas fa-atom"/> Register</NavLink></Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <i class="fas fa-briefcase">   Tugas</i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/Todo">Todo List App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/HitungKata">WordCount App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/movie">Search Movie App</Link>
                    </DropdownItem>
                    <DropdownItem>
                    <Link to="/Todo2">Todo Ver. Mas Fikri</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );

    }
    
  }
}

const mapStateToProps = (state)=>{
  return {
    todo : state.list.todoList,
    user : state.user.username,
    role : state.user.role
  }
}

export default connect (mapStateToProps,{resetUser})(Header);
import CustomNavbar from "./CustomNavbar"

const Base = ({title="Welcome to our web",children}) => {
  return (
    <div className="container-fluid p-0 m-0">
        <CustomNavbar/>
            {children}
       
    </div>
  )
}

export default Base
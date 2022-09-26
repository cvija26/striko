import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ModalDelict from "./ModalDelict";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import "../styles/NesteModal.css";

const styles={
  cell:{
    backgroundColor:"#262254",borderBottom:"3px solid aqua",borderRight:"3px solid aqua",color:'aqua',fontSize:"8px",borderLeft:'none',borderTop:'none'
  },
  cellNoBorder:{backgroundColor:"#262254",borderBottom:"3px solid aqua",color:'aqua', borderRight:"none",borderTop:'none',fontSize:"8px"},
  bodyCell:{borderBottom:"none",color:"white",fontSize:"8px",borderRight:"3px solid aqua",backgroundColor:"#262254",outline:'none'

  },
  bodyCellNoBorder:{
    borderBottom:"none",color:"white", fontSize:"8px",backgroundColor:"#262254",borderRight:'none'
  },
  bodyCellWhite:{
    color:"white", fontSize:"8px",borderRight:"3px solid aqua",backgroundColor:"#262254",borderBottom:"3px solid aqua"
  }
};
const childModal={
  width:'500px',
  height:'210px',
  bgcolor: '#262254'
}

const button={
  color:'black',
  display:'inline-block',
  backgroundColor:'aqua',
  margin:'6px',
  fontSize:'12px',
  transition: 'transform .2s',
  "&:hover": {
    transition: 'transform .2s',
    transform: 'scale(1.1)',
    backgroundColor:'aqua'
    
    
  },
 
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#4425DF',
 border:'none',
  boxShadow: 24,
  borderRadius:2,
  height:'580px',
  pt: 2,
  px: 4,
  pb: 3,
  outline:'none'
};


function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <div className='wrapperButton'>
    <Button sx={{...button}} >UNESI RUČNO</Button>
    <Button sx={{...button}} >UNOS SANKCIJA</Button>
      <Button sx={{...button}}  onClick={handleOpen}>VERIFIKUJ</Button>
      </div>
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style,...childModal,backgroundColor:'#262254' }}>
        <TableContainer  style={{margin:"0 auto",  backgroundColor:'#262254', width:'400px',height:'140px',
        marginTop:'5px' , borderRadius:10,border:'none', outline: 'none' }} >
          <Table style={{width: "100%", tableLayout:"auto"}}   aria-label="simple table" stickyHeader>
          <TableBody>
              <TableRow style={{cursor: "default", width: "10px"}}>
                <TableCell size="small" style={styles.cell}  align="center">STATUS</TableCell>
                <TableCell  style={styles.cell} align="center">BRZINA</TableCell>
                <TableCell  style={styles.cell}  align="center">VRIJEME</TableCell>
                <TableCell  style={styles.cell}  align="center"><p>REGISTARSKA OZNAKA RADARA</p></TableCell>
                <TableCell style={styles.cellNoBorder}  align="center">PREKORAČENJE</TableCell>
              </TableRow>
              <TableRow style={{cursor: "default", width: "10px"}}>
                <TableCell size="small" style={styles.bodyCellWhite}  align="center"><img className="status-logo" src="./img/green.svg" alt="green"/></TableCell>
                <TableCell  style={styles.bodyCellWhite} align="center">131</TableCell>
                <TableCell  style={styles.bodyCellWhite}  align="center">03.08.2022. 08:35</TableCell>
                <TableCell  style={styles.bodyCellWhite}  align="center"><p >L45D3</p></TableCell>
                <TableCell style={{...styles.cell,borderRight:'none',color:'white'}}  align="center">21</TableCell>
              </TableRow>
              <TableRow style={{cursor: "default", width: "10px"}}>
              <TableCell size="small" style={styles.cell}  align="center">TIP</TableCell>
              <TableCell  style={styles.cell} align="center">ORG. JED</TableCell>
              <TableCell  style={styles.cell}  align="center">ADRESA</TableCell>
              <TableCell  style={styles.cell}  align="center"><p >VRSTA PREKRŠAJA</p></TableCell>
              <TableCell style={styles.cellNoBorder}  align="center">RADAR SERIAL</TableCell>
            </TableRow>
            <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.bodyCell}  align="center">MOBILNI R.</TableCell>
            <TableCell  style={styles.bodyCell} align="center">PU GRADIŠKA</TableCell>
            <TableCell  style={styles.bodyCell}  align="center">GRADIŠKA</TableCell>
            <TableCell  style={styles.bodyCell}  align="center"><p >PREKORAČENJE BRZINE</p></TableCell>
            <TableCell style={styles.bodyCellNoBorder}  align="center">K032302044</TableCell>
          </TableRow>
          </TableBody>
          </Table>
        </TableContainer>
        
        <Button sx={{...button,display:'block',margin:'0px auto',width:'200px',height:'35px'}}  onClick={handleClose}>VERIFIKUJ</Button>
      
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
    function onModalClose(event) {
        
        props.onCloseModal();
      }

  return (
    <div>
      
       <Modal
      
      open={props.IsModalOpened}
        onClose={onModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style,backgroundColor:'#262254', width: 1000 }}>
         <ModalDelict data={props.data}/>
          <ChildModal  />
        </Box>
      </Modal>
    </div>
  );
}
import CardMedia from '@mui/material/CardMedia';
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import React  from "react";
import "../styles/ModalDelict.css";




const photo={
  width:'230px',
  height:'160px',
  marginBottom:"5px",
  borderRadius:"5px"
}

const video={
  width:'230px',
  height:'200px',
  borderRadius:"5px"

}
  

  
const styles={
    cell:{
      backgroundColor:"#000033",borderBottom:"3px solid aqua",borderRight:"3px solid aqua",color:'aqua',fontSize:"8px",width:"45%"
    },
    cellNoBorder:{backgroundColor:"#000033",borderBottom:"3px solid aqua",color:'aqua', fontSize:"8px",width:"45%"},
  
    
  
    
    
  };

export default function ModalDelict(props) {

   
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    
    setIsOpen(false);
  }

return(
  <div>
  <div className="main-wrapper">
<div className="main-left-wrapper">
 <div className="wrapper">
    <div className="wrapper-left">
    <CardMedia
    component="img"
    title='Slika prekršaja'
    image="/img/car.jpeg"
    alt="CardMedia Image Example"
    sx={{...photo}}
  />
  <CardMedia
  component="video"
  image='/img/video.mp4'
  title='Snimak prekršaja' 
  controls
  src="./myfile.mp4"
    sx={{...video}}
    /> 
  <div className="law">
    <p >Sankcije:</p>
    <p >član 235. stav 1,2,4.</p>
    <p >tačka 3.</p>
    <p >Napomena:</p>
  </div>
    </div>
    <div className="wrapper-right">
  <TableContainer  style={{  backgroundColor:'#000033', width:'380px',height:'453px',
    marginLeft:30, borderRadius:10 }} >
    <p className="title-aqua">Podaci o prekršaju</p>
      <Table style={{height:'87%',width: "85%", tableLayout:"auto",margin:'auto auto'}}   aria-label="simple table" stickyHeader>
      
        <TableBody>
        <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">TIP RADARA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">STACIONIRANI RADAR</TableCell>
          </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">VRSTA RADARA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left">EKIN SPOTTER</TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">BROJ ZAPISA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left">B676657-43243534</TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">SMIJER KRETANJA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left">ODLAZNI</TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">DUPLIRAN:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">0</TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">REGISTAR. OZNAKA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">T17O500</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">TABLICA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left"><span className='plate'>T17O500</span> <button className='change'>IZMJENI</button></TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">IZMJERENA BRZINA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">65</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">OGRANIČENJE:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">45</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">PREKORAČENJE:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">25</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">LOKACIJA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">ULICA KRFSKA, GRAD BANJA LUKA</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">STATUS TABLICE:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">VIDLJIVA</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">DATUM PREKRŠAJA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">03.08.2022. 08:35:15</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">VRSTA PREKRŠAJA:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left">PREKORAČENJE BRZINE</TableCell>
          </TableRow>
          <TableRow style={{cursor: "default", width: "10px"}}>
            <TableCell size="small" style={styles.cell}  align="left">POŠTANSKI BROJ:</TableCell>
            <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
          </TableRow>
         
          
          </TableBody>
            </Table>
        </TableContainer>
        </div>

        
      </div>
      <input id="note"></input>
  </div>
  <div className='main-right-wrapper'>
  <TableContainer  style={{  backgroundColor:'#000033', width:'290px',height:'130px',
  marginLeft:20, borderRadius:10 }} >
  <p className="title-aqua">Podaci o vlasniku</p>
    <Table style={{ width: "85%", tableLayout:"auto",margin:'0 auto'}}   aria-label="simple table" stickyHeader>
    
      <TableBody>
      <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">OSOBA/FIRMA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left">MARKO MARKOVIĆ</TableCell>
        </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">JMB/JIB:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left">3103000123507</TableCell>
      </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">ADRESA/SJEDIŠTE:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left">Put srpskih branilaca 82</TableCell>
      </TableRow>
      </TableBody>
      </Table>
      </TableContainer>

      <TableContainer  style={{  backgroundColor:'#000033', width:'290px',height:'200px',
  marginLeft:20, borderRadius:10,marginTop:10 }} >
  <p className="title-aqua">Podaci o vozačkoj dozvoli</p>
    <Table style={{width: "85%", tableLayout:"auto",margin:'0 auto'}}   aria-label="simple table" stickyHeader>
    
      <TableBody>
      <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">BROJ VOZAČKE D:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
        </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">STATUS VOZAČKE:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
      </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">ORGAN IZDAVANJA:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
      </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">VRSTA VOZILA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">TIP VOZILA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
        </TableRow>
        <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">MARKA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
        </TableRow>
      </TableBody>
      </Table>
      </TableContainer>

      <TableContainer  style={{  backgroundColor:'#000033', width:'290px',height:'140px',
  marginLeft:20,marginTop:10, borderRadius:10 }} >
  <p className="title-aqua">Podaci o vozilu</p>
    <Table style={{width: "85%", tableLayout:"auto",margin:'0 auto'}}   aria-label="simple table" stickyHeader>
    
      <TableBody>
      <TableRow style={{cursor: "default", width: "10px"}}>
          <TableCell size="small" style={styles.cell}  align="left">BOJA:</TableCell>
          <TableCell  style={styles.cellNoBorder} align="left">PLAVA</TableCell>
        </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">BROJ ŠASIJE:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left"></TableCell>
      </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">REGISTROVAN DO:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left">24.10.2022</TableCell>
      </TableRow>
      <TableRow style={{cursor: "default", width: "10px"}}>
        <TableCell size="small" style={styles.cell}  align="left">KATEGORIJA VOZILA:</TableCell>
        <TableCell  style={styles.cellNoBorder} align="left">B</TableCell>
      </TableRow>
      </TableBody>
      </Table>
      </TableContainer>
  </div>
  </div>
</div>
)
          }
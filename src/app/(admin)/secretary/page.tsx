import "@/styles/secretary.css"

export default function Secretary() {
  return (
    <main className="p-2">
     <div className="wrapper">
       <h1 className="header">Secretary Dashboard</h1>
       <p className="headerDis">Manage students records and school communications.</p>

       
       <div className="summaryData">
          <div className="summary">New adminssion</div>
          <div className="summary">Total students</div>
          <div className="summary">Students per class</div>
          <div className="summary">Notice published</div>
       </div>
     </div>
      
    </main>
  );
}

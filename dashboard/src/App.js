import './App.css';
import Profile from './components/profile';
import Daily from './components/daily';
// import Weekly from './components/weekly';
// import Monthly from './components/monthly';

function App() {
  return (
    <div id='container'>
      <Profile/>
      
      <div id="dashboard-container">
        <Daily
          activity="Work"
          hours="5hrs"
          previous="Last Week - 7hrs"
        />
        <Daily
          activity="Play"
          hours="1hr"
          previous="Last Week - 2hrs"
        />
        <Daily
          activity="Study"
          hours="0hr"
          previous="Last Week - 1hr"
        />
        <Daily
          activity="Exercise"
          hours="1hr"
          previous="Last Week - 1hr"
        />
        <Daily
          activity="Social"
          hours="1hr"
          previous="Last Week - 3hrs"
        />
        <Daily
          activity="Self Care"
          hours="0hrs"
          previous="Last Week - 1hr"
        />
      </div>    
      {/* <div id="dashboard-container">
        <Weekly
          activity="Work"
          hours="32hrs"
          lastWeek="Previous - 36hrs"
        />
        <Weekly
          activity="Play"
          hours="10hrs"
          lastWeek="Previous - 8hrs"
        />
        <Weekly
          activity="Study"
          hours="4hrs"
          lastWeek="Previous - 7hrs"
        />
        <Weekly
          activity="Exercise"
          hours="4hrs"
          lastWeek="Previous - 7hrs"
        />
        <Weekly
          activity="Social"
          hours="5hrs"
          lastWeek="Previous - 10hrs"
        />
        <Weekly
          activity="Self Care"
          hours="2hrs"
          lastWeek="Previous - 2hrs"
        />
      </div>  
      <div id="dashboard-container">
        <Monthly
          activity="Work"
          hours="103hrs"
          lastWeek="Previous - 128hrs"
        />
        <Monthly
          activity="Play"
          hours="23hrs"
          lastWeek="Previous - 29hrs"
        />
        <Monthly
          activity="Study"
          hours="13hrs"
          lastWeek="Previous - 19hrs"
        />
        <Monthly
          activity="Exercise"
          hours="11hrs"
          lastWeek="Previous - 18hrs"
        />
        <Monthly
          activity="Social"
          hours="21hrs"
          lastWeek="Previous - 23hrs"
        />
        <Monthly
          activity="Self Care"
          hours="7hrs"
          lastWeek="Previous - 11hrs"
        />
      </div>   */}
    </div>
  );
}

export default App;
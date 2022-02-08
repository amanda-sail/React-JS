import './App.css';
import Dashboard from './daily.js'

function App() {
  return (
    <div>
      <Profile/>
      
      <div id="dashboard-container">
        <Daily
          activity="Work"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Daily
          activity="Play"
          hours="1hr"
          lastWeek="Previous - 2hrs"
        />
        <Daily
          activity="Study"
          hours="0hr"
          lastWeek="Previous - 1hr"
        />
        <Daily
          activity="Exercise"
          hours="1hr"
          lastWeek="Previous - 1hr"
        />
        <Daily
          activity="Social"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Daily
          activity="Self Care"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
      </div>    
      <div id="dashboard-container">
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
          lastWeek="Previous - 7hrs"
        />
        <Weekly
          activity="Self Care"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
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
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Monthly
          activity="Self Care"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
      </div>  
    </div>
  );
}

export default App;


Social
1hr
<!-- daily -->
Previous - 3hrs
<!-- daily -->
5hrs
<!-- weekly -->
Previous - 10hrs
<!-- weekly -->
21hrs
<!-- monthly -->
Previous - 23hrs
<!-- monthly -->

Self Care
0hrs
<!-- daily -->
Previous - 1hr
<!-- daily -->
2hrs
<!-- weekly -->
Previous - 2hrs
<!-- weekly -->
7hrs
<!-- monthly -->
Previous - 11hrs
<!-- monthly -->
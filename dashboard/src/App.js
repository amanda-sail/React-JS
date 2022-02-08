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
          lastWeek="Previous - 10hrs"
        />
        <Daily
          activity="Study"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Daily
          activity="Exercise"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
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
          hours="103hrs"
          lastWeek="Previous - 128hrs"
        />
        <Weekly
          activity="Play"
          hours="1hr"
          lastWeek="Previous - 10hrs"
        />
        <Weekly
          activity="Study"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Weekly
          activity="Exercise"
          hours="5hrs"
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
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Monthly
          activity="Play"
          hours="1hr"
          lastWeek="Previous - 10hrs"
        />
        <Monthly
          activity="Study"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
        />
        <Monthly
          activity="Exercise"
          hours="5hrs"
          lastWeek="Previous - 7hrs"
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


Play
1hr
<!-- daily -->
Previous - 2hrs
<!-- daily -->
10hrs
<!-- weekly -->
Previous - 8hrs
<!-- weekly -->
23hrs
<!-- monthly -->
Previous - 29hrs
<!-- monthly -->

Study
0hrs
<!-- daily -->
Previous - 1hr
<!-- daily -->
4hrs
<!-- weekly -->
Previous - 7hrs
<!-- weekly -->
13hrs
<!-- monthly -->
Previous - 19hrs
<!-- monthly -->

Exercise
1hr
<!-- daily -->
Previous - 1hr
<!-- daily -->
4hrs
<!-- weekly -->
Previous - 5hrs
<!-- weekly -->
11hrs
<!-- monthly -->
Previous - 18hrs
<!-- monthly -->

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
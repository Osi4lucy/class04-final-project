import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import {ReactiveBase, CategorySearch, RangeSlider, ResultCard} from '@appbaseio/reactivesearch';


class App extends Component {
  render() {
    return (
      <ReactiveBase
      app="bands"
       type="_doc"
       url="https://amp.a-magdy.me" >
      
      <div>
        <h1>African Music Archive(AMA)</h1>
        <CategorySearch 
        componentId="musicSearch"
        dataField={["titles", "artists"]}
        categoryField="titles.raw"
        placeholder="Search AMA"
        queryFormat="and"
        // iconPosition="right"
        autosuggest={true}
        style={{
          padding: "20px",
          "marginTop": "20px"

        }}
        innerClass={{
          title: 'text-title',
          input: 'text-input'
        }}
        className="CategorySearch"
        />

        <RangeSlider 
        componentId="musicFilter"
        dataField="publishedYear"
        title="Year"
        filterLabel="Year"
        showHistogram={true}
        range={{
          start: 1945,
          end: 2018
        }}

        rangeLabels={{
          start: "1950"
        
         }}
          interval={1}
          react={{
            and: ["searchbox"]
        }}

        style={{
          padding: "10px",
          "marginTop": "10px"
        }}
      />
      <div><h2>Album Suggestions</h2></div>
      
            <ResultCard
              componentId="result"
              dataField="titles"
              title="Results"
              from={0}
              size={4}
              pagination={true}
              pages={9}
              react={{
                and: ["searchbox", "yearfilter"]
              }}
              onData={(res) => {
                console.log(res.publishedYear);
                return {
                  image: "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",
                  title: 'Song Title: '+res.titles,
                  description: (
                    <div>
                      <p>
                        {'Description: '+res.artists + " " + "★".repeat(res.location)}
                      </p>
                        <p>{'Year: '+res.publishedYear}</p>
                    </div>
                ),
                  
                // containerProps: {
                //   onMouseEnter: () => console.log('😁'),
                //   onMouseLeave: () => console.log('🙀')
                // } 
                  

                }
              }}
              style={{
                "textAlign": "center"
              }}
            />
          </div>
      {/* </div> */}

      </ReactiveBase>
    );
  }
}

export default App;

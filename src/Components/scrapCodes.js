app="ama-app"
      credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
      <div>
        Hello Reactive Search!
      </div>
      
      <CategorySearch
        ComponentId="searchbox"
        dataField="name"
        categoryField="brand.raw"
        placeholder="Search for cars"
      />
      <SingleRange
        componentId="ratingsfilter"
        dataField="rating"
        title="Filter by ratings"
        data={[
          {"start": 4, "end": 5, "label": "4 starts and up"},
          {"start": 3, "end": 5, "label": "3 starts and up"},
          {"start": 2, "end": 5, "label": "2 starts and up"},
          {"start": 1, "end": 5, "label": "1 starts and up"}
        ]}
        defaultSelected="4 stars and up"
      />
      <ResultCard
	componentId="results"
	dataField="name"
	size={6}
	pagination={true}
	react={{
		and: ["searchbox", "ratingsfilter"]
	}}
	onData={(res) => {
		return {
			image: 'http://www.asfera.info/files/images/1_aprela/4/deloreyn.jpg',
			title: res.name,
			description: res.brand + " " + "*".repeat(res.rating)
		}
	}}
/>

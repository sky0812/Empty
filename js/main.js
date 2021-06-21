
const app = {
    data() {
        return {
            loading: false,
            planets: [],
            filterKeys: [
                {
                    id: 'rotation_period',
                    label: 'Rotation period'
                },
                {
                    id: 'climate',
                    label: 'Climate'
                },
            ],
            paged: 1,
            postsPerPage: 4,
            filters: [],
            activeFilters: {},
            sortingByName: false,
        }
    },
    computed: {
        currentPlanets() {
            let planets = this.filteredPlanets();
            planets = this.sortedPlanets(planets);
            
            return planets;
        },
        paginatedPlanets() {
            return this.getCurrentPage(this.currentPlanets);
        },
        maxNumPages() {
            console.log
            return Math.ceil(this.currentPlanets.length / this.postsPerPage); 
        }
    },
    methods: {
        parseFilters() {
            for (const filterKey of this.filterKeys) {
                const filterData = {};
                filterData.id = filterKey.id;
                filterData.label = filterKey.label;
                filterData.options = [];
                for (const planet of this.planets) {
                    if (!filterData.options.includes(planet[filterKey.id])) {
                        filterData.options.push(planet[filterKey.id]);
                    }
                }
                filterData.options.sort((a, b) => { return a - b; });
                this.filters.push(filterData);       
            }
            
        },
        async getPlanets() {
            let response = await fetch('https://swapi.dev/api/planets');
            if (response.ok) {
                let json = await response.json();
                if (!Array.isArray(json.results)) {
                    return;
                }
                this.planets = json.results;
                this.loading = false;
                this.parseFilters();
            } else {
                alert('Something went wrong. Try again later.');
            }
        },
        updateFilter(key, value) {
            this.activeFilters[key] = value;
            this.paged = 1;
        },
        filteredPlanets() {
            const filteredPlanates = this.planets.filter((planet) => {
                for (const key in this.activeFilters) {
                    let filterValue = this.activeFilters[key];
                    if (filterValue && planet[key] !== filterValue) {
                        return false;
                    }
                }
                return true;
            });
            return filteredPlanates;
        },
        sortedPlanets(planets) {
            if (this.sortingByName) {
                planets.sort((a, b) => {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                });
            }
            return planets;
        },
        updateSorting(val) {
            this.sortingByName = val === 'name' ? true : false;
            this.paged = 1;
        },
        getCurrentPage(planets) {
            const begin = (this.paged - 1) * this.postsPerPage;
            const end = this.paged  * this.postsPerPage;
            return planets.slice(begin, end);
        },
        setPage(num) {
            this.paged = num;
        }
    },
    filters: {
        formatTime(val) {
            let date = new Date(val);  
            return `Created: ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        }
    },
    async mounted() {
        this.loading = true;
        this.getPlanets();
    },
}

Vue.createApp(app).mount('#app');



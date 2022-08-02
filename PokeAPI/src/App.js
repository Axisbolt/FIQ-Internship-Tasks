import React, { useState, useEffect,} from 'react';
import ReactDOM from 'react-dom';
import ReactJsonPrint from 'react-json-print';
import './App.css';

function App() {
    const [title, setAPI] = useState('');
    var newStr = title.substring(8);
    //const Endpoint = "https://pokeapi.co/api/v2/" + title;
    
    const callRestApi = async () => 
    {
        const response = await fetch(process.env.REACT_APP_API_URL+title);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return JSON.stringify(jsonResponse);
    };
  
    function RenderResult() 
    {
        const [apiResponse, setApiResponse] = useState("*** now loading ***");
        useEffect(() => 
        {
            callRestApi().then(
            result => setApiResponse(result));
        },[]);
  
        return(
            <div className='App'>
                <nav class="navbar navbar-expand-lg navbar-light shadow justify-content-between">
                    <div class="container text-light">
                        <div class="w-100 d-flex justify-content-between align-items-center">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" width="200" height="80"/>
                            </div>
                            <div>
                                <a class="navbar-brand text-primary logo h1 align-self-center">
                                Pokemon API Search
                                </a>
                            </div>
                            <div>
                                <ul class="navbar-nav bg-white justify-content-between">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://pokeapi.co/about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://pokeapi.co/docs/v2">APIv2</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://pokeapi.co/docs/graphql">GraphQL v1beta</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <br></br>
                <br></br>
                <div class="p-5 text-center bg-light">
                    <img src="https://avatars.githubusercontent.com/u/64151210?v=4" alt="Girl in a jacket" width="200" height="200"/>
                    <h1 class="mb-3">The RESTful Pokémon API</h1>
                    <h4 class="mb-3">Serving over 250,000,000 API calls each month!</h4>
                    <img src="http://24.media.tumblr.com/tumblr_md2qy86zYp1qmwn4mo1_500.gif"  width="200" height="70"/>
                </div>
                <div class="p-5 text-center bg-light" >
                    <h5 class="mb-3">All the Pokémon data you'll ever need in one place,easily accessible through a modern RESTful API.</h5>
                    <a class="mb-3" href='https://pokeapi.co/docs/v2'>Check out the docs!</a>
                </div>

                <h1 class="display-5 text-primary">Try it now!</h1>
                <label>https://pokeapi.co/api/v2/</label>
                <input type= "text" placeholder="Search" required value={title} onChange={(e) => setAPI(e.target.value)}/>
                <br></br>
                <br></br>
                <p>
                    Need a hint?
                    <a class="text-decoration-none" onClick={(e) => setAPI('pokemon/ditto')}>pokemon/ditto, </a> 
                    <a class="text-decoration-none" onClick={(e) => setAPI('pokemon-species/aegislash')}>pokemon-species/aegislash, </a> 
                    <a class="text-decoration-none" onClick={(e) => setAPI('type/3')}>type/3, </a> 
                    <a class="text-decoration-none" onClick={(e) => setAPI('ability/battle-armor')}>ability/battle-armor, </a> 
                    <a class="text-decoration-none" onClick={(e) => setAPI('pokemon?limit=100000&offset=0')}>pokemon?limit=100000&offset=0, </a> 
                </p>
                <br></br>
                <h4>Resources for {newStr}</h4>
                <div class="scroll">
                    <ReactJsonPrint expanded dataString={apiResponse} />
                </div>
                <br></br>
                <h4>Raw Json</h4>
                <div class="scroll">
                    <code>
                        {apiResponse}
                    </code>
                </div>
                <br></br>
                
                <footer class="bg-dark" id="tempaltemo_footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 pt-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"  width="200" height="70"/>
                            </div>
                        </div>

                        <div class="row text-light mb-4">
                            <div class="w-100 my-3 border-top border-light"></div>
                            <div class="col-auto">
                                <label class="sr-only" for="subscribeEmail">Email address</label>
                                <div class="input-group mb-2">
                                    <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                                    <div class="input-group-text btn-primary text-light">Subscribe</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-100 bg-black py-3">
                        <div class="container">
                            <div class="row pt-2">
                                <div class="col-12">
                                    <p class="text-left text-light">
                                        Copyright &copy; 2022 Pokemon
                                        | Designed by <a rel="sponsored"  target="_blank">Kapil Chouhan</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    };
  
    ReactDOM.render
    (
        <RenderResult/>,
        document.querySelector('#root')
    );
}

export default App;

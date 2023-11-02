export const fetchWrapper = {
  get, 
  getLogged,
  getBody,
  login,
  postProperty,
  postUser,
  post,
  patch,
  delete: _delete
};


function get(url: any) {
  const requestOptions = {
    method:'GET'
  };
  return fetch(url, requestOptions).then(handleResponse);
}
function getBody(url: any, body: any) {
  const requestOptions = {
    method:'GET',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: body
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function getLogged(url: any, token: any) {
  const requestOptions = {
    method:'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function login(url: any, body: any){
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password
    })
  }
  return fetch(url, requestOptions).then(handleResponse);
}

function postProperty(url:any, body: any, token: any) {
  const requestOptions = {
    method:'POST',
    headers: { 
      Authorization: `Bearer ${token}`
    },
    body: body
  }
  return fetch(url, requestOptions).then(handleResponse);
}

function postUser(url:any, body: any) {
  const requestOptions = {
    method:'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: body
  }
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url:any, body: any, token: any) {
  const requestOptions = {
    method:'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: body
  }
  return fetch(url, requestOptions).then(handleResponse);
}
function patch(url: any, body: any, token: any){
  const requestOptions = {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  return fetch(url, requestOptions).then(handleResponse);
}
function _delete(url: any, token: any){
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response: any){
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
  }

  return data;
  })
}
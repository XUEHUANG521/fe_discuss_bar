const store:Storage = localStorage;

export function get<T>(key:string, getKey=false):T {
	return getKey? (store.get(`${key}`) || Object.create(null)) : store.getItem(`${key}`); 
}

export function put<T>(key:string, value: T) {
	store.setItem(`${key}`, JSON.stringify(value));
}

export function del(key:string) {
	store.removeItem(`${key}`);
}

export function clearStorage() {
	store.clear();
}


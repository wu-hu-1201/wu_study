// 实现Storage,使得该对象为单例，基于localStorage进行封装，
// 实现方法setItem(key, value)和getItem(key)

class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }
    setItem(key, value) {
        return localStorage.setItem(key, value)
    }

    getItem(key) {
        return localStorage.getItem(key)
    }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()


storage1.setItem('name', 'wn')
storage2.setItem('name', 'pp')


storage1.getItem('name')   // wn
storage2.getItem('name')
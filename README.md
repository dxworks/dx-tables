To build, run `npm run build`

To replace the bundle-template.js file in dx, please alter the line where tabs are defined with the following:

```javascript
const tabs=[${tabsList}]
```

This can be used as a web component in other web applications.Replace the 'tabs' const in the bundle file with your generated .json having the structure defined in the backend.
Replace the script in the index.html file with the bundle content.

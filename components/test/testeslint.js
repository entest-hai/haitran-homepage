// 24 NOV 2021 TRAN MINH HAI setup eslint & prettier for next 
// test extend prettier need to install npm install --save-dev eslint-config-prettier
// and extends .eslintrc.json with "prettier"
// only need eslint and estlint-config-next is fine, can fix on save. 

const TestEslint = () => {
  const name = 'Hai Tran';
  return (
    <div>
      {name}
      Hai Tran 
    </div>
  )
}

export {TestEslint}
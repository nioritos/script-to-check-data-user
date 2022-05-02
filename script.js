const requestedDatas = {
    userName: 'axis development',
    passWord: 'axis800secondPort80',
}

const dataUser = {
    userName: 'axis development',
    passWord: 'axis800secondPort80',
};

function verifyUserData() {
    if(requestedDatas.userName === dataUser.userName && requestedDatas.passWord === dataUser.passWord) {
        console.log('sucessfyl!');
        requestCodeToVerify();
    }else if(requestedDatas.userName === dataUser.userName || requestedDatas.passWord === dataUser.passWord){
        console.log('algo de errado nao está certo.')
    }else {
        console.log(false)
    }
};

function requestCodeToVerify() {
    var codeToVerify = 'ascei30213';
    verifyCodes('ascei30212', codeToVerify);
};

function verifyCodes(code, data_code) {
    if(code === data_code) {
        console.log('sucessfyl! Your login was checked')
    }else {
        console.log(false)
    }
}


verifyUserData();
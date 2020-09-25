var regexp = {
  chinese: /^[\u4e00-\u9fa5]{0,}$/, // 中文字符
  qq: /^[1-9]\d{4,}$/, // QQ
  nickname: /^[\u4e00-\u9fa5\w]{2,18}$/, // 昵称
  password: /^\S{6,16}$/, // 密码
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  cnphone: /^0?(13|14|15|17|18|19)\d{9}$/, // 中国手机号
  id: /^\d{17}(\d|X)$/, // 身份证
  chinesename: /^[\u4e00-\u9fa5]{2,5}$/
}
var format0 = false, format1 = false, format2 = false, format3 = false,
  format4 = false, format5 = false, format6 = false
var userName = document.getElementById('userName'),
  userPassword = document.getElementById('userPassword'),
  userPassword_ = document.getElementById('userPassword_'),
  userFullName = document.getElementById('userFullName'),
  userId = document.getElementById('userId'),
  userEmail = document.getElementById('userEmail'),
  userPhone = document.getElementById('userPhone'),
  submit = document.getElementById('submit'),
  items = document.querySelectorAll('.item_')
userName.onblur = function () {
  if (this.value == '') {
    items[0].innerHTML = '用户名不能为空！'
    items[0].style.color = 'red'
  } else {
    if (!regexp.nickname.exec(this.value)) {
      items[0].innerHTML = '用户名格式不正确'
      items[0].style.color = 'red'
    } else {
      items[0].innerHTML = '格式正确'
      items[0].style.color = 'green'
      format0 = true
    }
  }
}
userPassword.onblur = function () {
  if (this.value == '') {
    items[1].innerHTML = '密码不能为空！'
    items[1].style.color = 'red'
  } else {
    if (!regexp.password.exec(this.value)) {
      items[1].innerHTML = '密码格式不正确'
      items[1].style.color = 'red'
    } else {
      items[1].innerHTML = '格式正确'
      items[1].style.color = 'green'
      format1 = true
    }
  }
}
userPassword_.onblur = function () {
  if (this.value == '') {
    items[2].innerHTML = '密码不能为空！'
    items[2].style.color = 'red'
  } else {
    if (this.value != userPassword.value) {
      items[2].innerHTML = '请确认两次密码一致'
      items[2].style.color = 'red'
    } else {
      items[2].innerHTML = '密码确认'
      items[2].style.color = 'green'
      format2 = true
    }
  }
}
userFullName.onblur = function () {
  if (this.value == '') {
    items[3].innerHTML = '中文姓名不能为空！'
    items[3].style.color = 'red'
  } else {
    if (!regexp.chinesename.exec(this.value)) {
      items[3].innerHTML = '中文姓名格式不正确'
      items[3].style.color = 'red'
    } else {
      items[3].innerHTML = '中文姓名格式正确'
      items[3].style.color = 'green'
      format3 = true
    }
  }
}
userId.onblur = function () {
  if (this.value == '') {
    items[4].innerHTML = '身份证号不能为空！'
    items[4].style.color = 'red'
  } else {
    if (!regexp.id.exec(this.value)) {
      items[4].innerHTML = '身份证号格式不正确'
      items[4].style.color = 'red'
    } else {
      items[4].innerHTML = '身份证号格式正确'
      items[4].style.color = 'green'
      format4 = true
    }
  }
}
userEmail.onblur = function () {
  if (this.value == '') {
    items[5].innerHTML = '邮箱不能为空！'
    items[5].style.color = 'red'
  } else {
    if (!regexp.email.exec(this.value)) {
      items[5].innerHTML = '邮箱格式不正确'
      items[5].style.color = 'red'
    } else {
      items[5].innerHTML = '邮箱格式正确'
      items[5].style.color = 'green'
      format5 = true
    }
  }
}
userPhone.onblur = function () {
  if (this.value == '') {
    items[6].innerHTML = '手机号不能为空！'
    items[6].style.color = 'red'
  } else {
    if (!regexp.cnphone.exec(this.value)) {
      items[6].innerHTML = '手机号格式不正确'
      items[6].style.color = 'red'
    } else {
      items[6].innerHTML = '手机号格式正确'
      items[6].style.color = 'green'
      format6 = true
    }
  }
}
submit.onclick = function () {
  if (format0 === true && format1 === true && format2 === true && format3 === true && format4 === true && format5 === true && format6 === true) {
    alert('提交成功！')
  } else {
    alert('信息有误！')
  }
}
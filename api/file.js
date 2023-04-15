export function fileUpload({tempFiles, tempFilePaths}, fileList) {
    console.log(tempFilePaths, tempFiles)
    uni.showLoading({
      title: "上传中...",
    })
    
    tempFiles.forEach(async (item) => {
      await uni.uploadFile({
        url: "http://127.0.0.1:8888/api/file/upload",
        formData: {
          name: item.name,
          file: item.file,
          prefix: "avatar/",
        },
        timeout: 5000,
        header: {
          Authorization: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNLMwtLS0sDC11FEqLU4t8kwBikGYeYm5qUAtiSm5mXlKtQBuc09aQgAAAA.yFZX9q3S-usJVmjBp2vS6q22cVYk_Ov199i2QYdp0jdc_08x9ulaQke7nTDTfs3tIEqKEk1qFoILfr3zSb-5dw"
        },
        success: (res) => {
          console.log(res);
          let data = JSON.parse(res.data)
          if (data.code === 200) {
            console.log("上传成功!");
            // 成功上传
            fileList.push({
              name: item.name,
              extname: item.extname,
              url: data.data
            })
          } else {
            uni.showToast({
              title: "图片上传失败!",
              icon:'error'
            })
          }
        },
        fail: (err) => {
          console.log(err);
          uni.showToast({
            title: "图片上传失败!",
            icon:'error'
          })
        },
        complete() {
          uni.hideLoading()
          console.log("此时fileList:", fileList)
        }
      })
    })
    
    return fileList
  }
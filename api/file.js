export function fileUpload({tempFiles, tempFilePaths}, fileList, userId  = 0, prefix = 'posts/') {
    console.log(tempFilePaths, tempFiles)
    uni.showLoading({
      title: "上传中...",
    })
    return new Promise((resolve, reject) => {
      tempFiles.forEach(async (item) => {
        await uni.uploadFile({
          // url: "http://127.0.0.1:8888/api/file/upload",
          url: "http://192.168.43.228:8888/api/file/upload",
          formData: {
            name: item.name,
            file: item.file,
            userId,
            prefix: prefix,
          },
          timeout: 5000,
          header: {
            Authorization: uni.getStorageSync("Authorization")
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
                url: data.data,
                uuid: item.uuid
              })
              resolve(fileList)
            } else {
              uni.showToast({
                title: "图片上传失败!",
                icon:'error'
              })
              reject(res.data)
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
    })
  }
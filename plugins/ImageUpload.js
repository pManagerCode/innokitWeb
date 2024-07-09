import { Plugin } from 'tiptap'
import { Image } from 'tiptap-extensions'
/**
 * Plugin for the tiptap editor that adds images to the editor
 * @see https://github.com/scrumpy/tiptap/blob/0f17abeee6df1a8b40c6c96413a158918ec45d34/packages/tiptap-extensions/src/nodes/Image.js
 * This class overwrites the default `image`. You need to make sure to **not** use the original class.
 */
export default class ImageUpload extends Image {
  constructor (options = {}) {
    super(options)
    this.uploader = options.uploader
  }
  get name () {
    return 'image'
  }
  get plugins () {
    const uploader = this.uploader
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            paste(view, event) {
              let hasFiles = false;
              let reader = new FileReader();
              //注册加载文件完毕事件
              reader.onload = function(event) {
                //获取object url
                let imageUrl = event.target.result;
                //插入到编辑器中
                const node = view.state.schema.nodes.image.create({ src: imageUrl });
                const transaction = view.state.tr.replaceSelectionWith(node);
                view.dispatch(transaction);
              };
              //从剪贴板中读取图片文件
              Array.from(event.clipboardData.files)
                .filter(item => item.type.startsWith("image")) //提取图片文件
                .forEach(item => {
                  //读取数据
                  reader.readAsDataURL(item);
                  hasFiles = true;
                });
              //扫尾
              if (hasFiles) {
                event.preventDefault();
                return true;
              }
            }
          },
        },
      }),
    ]
  }
}
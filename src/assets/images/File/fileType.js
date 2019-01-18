export default (name) => {
  let fileName = {
    dir: require('@/assets/images/File/dir.png'),
    unknown: require('@/assets/images/File/unknown.png'),
    jar: require('@/assets/images/File/jar.png'),
    java: require('@/assets/images/File/java.png'),
    bmp: require('@/assets/images/File/bmp.png'),
    c: require('@/assets/images/File/c.png'),
    'c++': require('@/assets/images/File/c++.png'),
    css: require('@/assets/images/File/css.png'),
    doc: require('@/assets/images/File/doc.png'),
    docx: require('@/assets/images/File/docx.png'),
    gif: require('@/assets/images/File/gif.png'),
    html: require('@/assets/images/File/html.png'),
    javac: require('@/assets/images/File/javac.png'),
    jpeg: require('@/assets/images/File/jpeg.png'),
    jpg: require('@/assets/images/File/jpg.png'),
    js: require('@/assets/images/File/js.png'),
    mp4: require('@/assets/images/File/mp4.png'),
    music: require('@/assets/images/File/music.png'),
    pdf: require('@/assets/images/File/pdf.png'),
    png: require('@/assets/images/File/png.png'),
    properties: require('@/assets/images/File/properties.png'),
    py: require('@/assets/images/File/python.png'),
    svg: require('@/assets/images/File/svg.png'),
    swf: require('@/assets/images/File/swf.png'),
    wmv: require('@/assets/images/File/wmv.png'),
    xls: require('@/assets/images/File/xls.png'),
    xlsx: require('@/assets/images/File/xlsx.png'),
    xml: require('@/assets/images/File/xml.png'),
    txt: require('@/assets/images/File/txt.png'),
    movies: require('@/assets/images/File/movies.png'),
    rar: require('@/assets/images/File/rar.png'),
    put: require('@/assets/images/File/put.png'),
    zip: require('@/assets/images/File/zip.png')
  }
  name = name.toLowerCase()
  let suffix = name.substring(name.lastIndexOf('.') + 1, name.length)
  let music = '.mp3.wma.flac.aac.mmf.amr.m4a.m4r.ogg.mp2.wav.wv'
  let movies = '.rm,rmvb,wmv,avi,3gp,amr,mp4,flv,mpeg,vod,dvd,dat,asf'
  if (music.indexOf(suffix) !== -1) {
    suffix = 'music'
  }
  if (movies.indexOf(suffix) !== -1) {
    suffix = 'movies'
  }
  return fileName[suffix] === undefined ? fileName['unknown'] : fileName[suffix]
}

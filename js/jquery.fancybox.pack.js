.fancybox-tmp iframe, .fancybox-tmp object {
    vertical-align: top;
    padding: 0;
    margin: 0;
}

.fancybox-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1002;
}

.fancybox-outer {
    padding: 0;
    margin: 0;
    background: #f9f9f9;
    color: #444;
    text-shadow: none;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
            border-radius: 4px;
}

.fancybox-opened {
    z-index: 1003;    
}

.fancybox-opened .fancybox-outer {
    -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
       -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.fancybox-inner {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    outline: none;
    overflow: hidden;
}

.fancybox-error {
    color: #444;
    font: 14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0;
    padding: 10px;
}

.fancybox-image, .fancybox-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    vertical-align: top;
}

.fancybox-image {
    max-width: 100%;
    max-height: 100%;
}

#fancybox-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -21px;
    margin-left: -21px;
    width: 42px;
    height: 42px;
    background: url('fancybox_loading.gif');
    opacity: 0.8;
    cursor: pointer;
    z-index: 1010;
}

.fancybox-close, .fancybox-prev span, .fancybox-next span {
    background-image: url('fancybox_sprite.png');
}

.fancybox-close {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    z-index: 1004;
}

.fancybox-prev, .fancybox-next {
    position: absolute;
    top: 0;
    width: 40%;
    height: 100%;
    cursor: pointer;
    background: transparent url('blank.gif'); /* helps IE */
    z-index: 1003;
}

.fancybox-prev {
    left: 0;    
}

.fancybox-next {
    right: 0;
}

.fancybox-prev span, .fancybox-next span {
    position: absolute;
    top: 50%;
    left: -9999px;
    width: 36px;
    height: 36px;
    margin-top: -18px;
    cursor: pointer;
    z-index: 1003;
}

.fancybox-prev span {
    background-position: 0 -36px;
}

.fancybox-next span {
    background-position: 0 -72px;
}

.fancybox-prev:hover, .fancybox-next:hover {
    visibility: visible;
}

.fancybox-prev:hover span {
    left: 20px;
}

.fancybox-next:hover span {
    left: auto;
    right: 20px;
}

.fancybox-tmp {
    position: absolute;
    top: -9999px;
    left: -9999px;
    padding: 0;
    overflow: visible;
    visibility: hidden;
}

/* Overlay helper */

#fancybox-overlay {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: none;
    z-index: 1001;
    background: #000;
}

/* Title helper */

.fancybox-title {
    visibility: hidden;    
    font: normal 13px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
    position: relative;
    text-shadow: none;
    z-index: 1005;
}

.fancybox-opened .fancybox-title {
    visibility: visible;
}

.fancybox-title-float-wrap {
    position: absolute;
    bottom: 0;
    right: 50%;
    margin-bottom: -35px;
    z-index: 1003;
    text-align: center;
}

.fancybox-title-float-wrap .child {
    display: inline-block;
    margin-right: -100%;
    padding: 2px 20px;
    background: transparent; /* Fallback for web browsers that doesn't support RGBa */
    background: rgba(0, 0, 0, 0.8);
    -webkit-border-radius: 15px;
       -moz-border-radius: 15px;
            border-radius: 15px;
    text-shadow: 0 1px 2px #222;
    color: #FFF;
    font-weight: bold;
    line-height: 24px;
    white-space: nowrap;
}

.fancybox-title-outside-wrap {
    position: relative;
    margin-top: 10px;
    color: #fff;
}

.fancybox-title-inside-wrap {
    margin-top: 10px;
}

.fancybox-title-over-wrap {
    position: absolute;
    bottom: 0;
    left: 0;    
    color: #fff;
    padding: 10px;
    background: #000;
    background: rgba(0, 0, 0, .8);
}
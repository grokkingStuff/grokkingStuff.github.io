webpackJsonp([69094776248763],{500:function(e,a){e.exports={data:{site:{siteMetadata:{author:"Vishakh Kumar",description:"A free library of psychological principles and examples to elevate your SaaS, e-commerce or other digital products.",facebookAppId:"310591556081648",title:"grokkingStuff :: viKumar",twitterHandle:"grokkingStuff",siteUrl:"https://grokkingStuff.github.iogrokkingStuff.github.io"}},markdownRemark:{html:'<h1>Table of Contents</h1>\n<ol>\n<li><a href="#org215033e">A brief history of the NACA airfoils</a></li>\n<li>\n<p><a href="#org8fcfde0">Airfoil Terminology</a></p>\n<ol>\n<li><a href="#org6cb96a6">Chord</a></li>\n<li><a href="#org2a6fbcd">Span</a></li>\n<li><a href="#orgcc02126">Parameters</a></li>\n<li><a href="#org0729875">Formular Definition</a></li>\n</ol>\n</li>\n<li>\n<p><a href="#org840f98b">Types of NACA Airfoils</a></p>\n<ol>\n<li><a href="#org0899956">Four figure Airfoils</a></li>\n<li><a href="#org7c6851a">Five figure Airfoils</a></li>\n<li><a href="#orgd6631e8">Extension to Four &#x26; Five Figure Airfoils</a></li>\n<li><a href="#orgd039c48">Extension of the NACA Series by the DVL</a></li>\n<li><a href="#orgbf8a78f">Extensions of the NACA Series with regard to the Pressure Distribution &#x26; Laminar Profiles</a></li>\n</ol>\n</li>\n<li>\n<p><a href="#org161d6cf">Distribution of points and why it matters</a></p>\n<ol>\n<li><a href="#orgaeeb497">Curvature Distribution of Linear Distribution</a></li>\n<li><a href="#org3924685">Cosine Distribution</a></li>\n<li><a href="#orgf9042d7">Curvature Distribution of Cosine Distribution</a></li>\n</ol>\n</li>\n<li>\n<p><a href="#org36cc5e8">Code to parse from the command line</a></p>\n<ol>\n<li><a href="#org9cce84b">How to use the commandline tool</a></li>\n<li><a href="#org0bd31d2">How to import data into different softwares</a></li>\n</ol>\n</li>\n</ol>\n<p>We’re going to be generating our own NACA airfoil data from scratch (using Haskell).</p>\n<p><a id="org215033e"></a></p>\n<h1>A brief history of the NACA airfoils</h1>\n<p>Before the National Advisory Committee for Aeronautics (NACA) developed the NACA series, airfoil design was based on past experience with known shapes and experimentation with modifications to those shapes.\nIn short, as long as lifting surfaces produced adequete lift, it was good to go.</p>\n<p>This methodology began to change in the early 1930s with the publishing of a NACA report entitled ”<a href="https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19930091108.pdf">The Characteristics of 78 Related Airfoil Sections from Tests in the Variable Density Wind Tunnel</a>. Not all 78 airfoils were used but the report did give aircraft manufacturers a wide selection to choose from. In fact, some aircrafts still use NACA airfoils, more than half a century later!</p>\n<p>In this report, the authors noted that the two primary variables that determine whether an airfoil was successful or not were the slope of the airfoil mean camber line and the thickness distribution above and below this line. More about this in the explanation of the formula.</p>\n<p><a id="org8fcfde0"></a></p>\n<h1>Airfoil Terminology</h1>\n<p><a id="org6cb96a6"></a></p>\n<h2>Chord</h2>\n<p><a id="org2a6fbcd"></a></p>\n<h2>Span</h2>\n<p><a id="orgcc02126"></a></p>\n<h2>Parameters</h2>\n<h3>Fixed parametrs of the NACA Series and how they relate to the constants</h3>\n<p><a id="org0729875"></a></p>\n<h2>Formular Definition</h2>\n<h3>Camber Line</h3>\n<h3>Thickness Section</h3>\n<h3>Thickness Distribution of the NACA Series</h3>\n<p>The NACA Series was based on previously developed airfoils like the Gottingen 398 and the Clark Y, which were nearly alike when their camber was removed and scaled to the same thickness.\nThe thickness distribution of these airfoils was therefore chosen as a method of producing fair profiles.</p>\n<p>The general equation of ordinates y in relation to x from 0 to 1 along the chord is:</p>\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 355px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 6.197183098591549%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAACXBIWXMAAiLgAAIi4AEpmIsHAAAANUlEQVQI1yWJyQkAQAjEtv8qfSneoA3sgJ8hyTwzq6qZiQhmFpFj7O5mpqqeujtexO5GIaIPnhQ3bwG5CL4AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="index_23465c2c905f3c2d6fa1aa0163ec9f3b4f3f6fb6.png" title="" src="/static/index_23465c2c905f3c2d6fa1aa0163ec9f3b4f3f6fb6-a7724be2e808a2d2fabf74523765d4c8-5a3a1.png" srcset="/static/index_23465c2c905f3c2d6fa1aa0163ec9f3b4f3f6fb6-a7724be2e808a2d2fabf74523765d4c8-e6dd6.png 138w,\n/static/index_23465c2c905f3c2d6fa1aa0163ec9f3b4f3f6fb6-a7724be2e808a2d2fabf74523765d4c8-0265d.png 275w,\n/static/index_23465c2c905f3c2d6fa1aa0163ec9f3b4f3f6fb6-a7724be2e808a2d2fabf74523765d4c8-5a3a1.png 355w" sizes="(max-width: 355px) 100vw, 355px">\n    </span>\n  </span>\n  \n<p>Now it’s time to apply constraints to it. In order to make the equation give results similar to\nOur constraints on this equation are:</p>\n<ul>\n<li>\n<p>Constraint at \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 140px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 14.285714285714285%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAiLgAAIi4AEpmIsHAAAAlklEQVQI1yWOuw6FIBAF/f/vobBSO7CgskajIgbERAQN0YD3JLfbMzv7KN73fZ4n55xSWpYlhIDivu/v+5xzXdcNwxBjbNv2LwghEAGVUkVVVUDXdZVlCXWe523bOOfeexh1XUPQWhNC1nVljIHAp5T2fV+gstYaY5qmQT7PE7/gJn7Z9x3z2IXuOI5SSnCsOI4DcJqmH71goEggPTmBAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="index_442e041532abe33b5ba7ba24be5444525af5b4fa.png" title="" src="/static/index_442e041532abe33b5ba7ba24be5444525af5b4fa-8e78101d75108d1a3cc8fb7c30d14d62-7e959.png" srcset="/static/index_442e041532abe33b5ba7ba24be5444525af5b4fa-8e78101d75108d1a3cc8fb7c30d14d62-fc418.png 138w,\n/static/index_442e041532abe33b5ba7ba24be5444525af5b4fa-8e78101d75108d1a3cc8fb7c30d14d62-7e959.png 140w" sizes="(max-width: 140px) 100vw, 140px">\n    </span>\n  </span>\n  </p>\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 200px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 21%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAiLgAAIi4AEpmIsHAAAAmElEQVQI14WOSwuEIBSF/f//y1UF0UI0NEKMSHoghiaSM4cZiNnNWVzO/e6TvP6plPI1fd+3bRtCeErEOXddV0ppmqZ5nsdx9N6f55k+AlyWZV1XQCklpRQG/TFGzjkRQhzHYYwZhgG7u66Dr+vaWotdgEopRKT7vmutMYm4bVvTNOS+7+cNeDyZc0bHL4QAq6pijOHyU3oD4v3hE7fQRLAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="index_4690d79bb7785217576563a677650fd560a3d56d.png" title="" src="/static/index_4690d79bb7785217576563a677650fd560a3d56d-44384370f09d57f88db861505d822ea5-8e70c.png" srcset="/static/index_4690d79bb7785217576563a677650fd560a3d56d-44384370f09d57f88db861505d822ea5-5774e.png 138w,\n/static/index_4690d79bb7785217576563a677650fd560a3d56d-44384370f09d57f88db861505d822ea5-8e70c.png 200w" sizes="(max-width: 200px) 100vw, 200px">\n    </span>\n  </span>\n  \n<p>halfThickness t x = 5<em>t</em>(firstTerm - secondTerm - thirdTerm + fourthTerm - fifthTerm)\nwhere firstTerm = 0.2969<em>(sqrt x)\nsecondTerm = 0.1260</em>(x)\nthirdTerm = 0.3516<em>(x</em>x)\nfourthTerm = 0.2843<em>(x</em>x<em>x)\nfifthTerm = 0.1015</em>(x<em>x</em>x*x)<br>\n— trailing edge is open. Use 0.1036 otherwise</p>\n</li>\n</ul>\n<p><a id="org840f98b"></a></p>\n<h1>Types of NACA Airfoils</h1>\n<p><a id="org0899956"></a></p>\n<h2>Four figure Airfoils</h2>\n<p><a id="org7c6851a"></a></p>\n<h2>Five figure Airfoils</h2>\n<p><a id="orgd6631e8"></a></p>\n<h2>Extension to Four &#x26; Five Figure Airfoils</h2>\n<p><a id="orgd039c48"></a></p>\n<h2>Extension of the NACA Series by the DVL</h2>\n<p><a id="orgbf8a78f"></a></p>\n<h2>Extensions of the NACA Series with regard to the Pressure Distribution &#x26; Laminar Profiles</h2>\n<h3>Series 1 to 6</h3>\n<h3>Series 7 &#x26; 8</h3>\n<p><a id="org161d6cf"></a></p>\n<h1>Distribution of points and why it matters</h1>\n<p><a id="orgaeeb497"></a></p>\n<h2>Curvature Distribution of Linear Distribution</h2>\n<p><a id="org3924685"></a></p>\n<h2>Cosine Distribution</h2>\n<p><a id="orgf9042d7"></a></p>\n<h2>Curvature Distribution of Cosine Distribution</h2>\n<p><a id="org36cc5e8"></a></p>\n<h1>Code to parse from the command line</h1>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">upperYPointsGen xPoints t = map (halfThickness t) xPoints\nlowerYPointsGen xPoints t = map (halfThickness t) xPoints </code></pre>\n      </div>\n<p><a id="org9cce84b"></a></p>\n<h2>How to use the commandline tool</h2>\n<p><a id="org0bd31d2"></a></p>\n<h2>How to import data into different softwares</h2>',fields:{path:"/nacaairfoil/",slug:"nacaairfoil"},frontmatter:{datePublished:"2018-07-19T08:15:15Z",title:"NACA Airfoil data generator",seoImage:{childImageSharp:{resize:{src:"/static/seo-image-04e2dc8d5393ee07a6a323414235475d-a159b.png"}}}}},allMarkdownRemark:{edges:[{node:{fields:{path:"/404/",slug:"404"},frontmatter:{title:"Not found"}}},{node:{fields:{path:"/nacaairfoil/",slug:"nacaairfoil"},frontmatter:{title:"NACA Airfoil data generator"}}}]}},pathContext:{path_:"/nacaairfoil/",slug:"nacaairfoil"}}}});
//# sourceMappingURL=path---nacaairfoil-10731296810dba23f861.js.map
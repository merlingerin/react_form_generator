import React from 'react';

const AboutPage = () => {
	return (
		<div className="container">
			<div className="Box-body">
				<article className="markdown-body entry-content p-5">
					<h1>JSON Form Generator</h1>
					<h2>Available Scripts</h2>
					<p>In the project directory, you can run:</p>
					<ul>
						<li>
							<h3>
								<code>npm start</code>
							</h3>
						</li>
						<li>
							<h3>
								<code>npm run build</code>
							</h3>
						</li>
					</ul>
					<hr />
					<h2>Description</h2>
					<p>
						<code>It's just a test realisation of JSON form generator.</code>
					</p>
					<p>
						Application allows you to create HTML form from JSON file. Write/paste JSON config in <code>textarea</code> on the left side of home page. Right side of home page shows you
						hints/warrnings/errors of your JSON config; IF your JSON config is valid you could see generated form on the second tab - <code>RESULT</code>.
					</p>
					<pre lang="javasciprt">
						<code>
							JSON FORMAT:
							{`
        "form_items": [
            {
                "name": "name of input field",
                "label": "label of input field",
                "type": "type of input field"
            }
        ],
        "form_title": "Form name",
        "form_buttons": [{
            "title": "Apply"
        }]
    `}
						</code>
					</pre>
					<h3>Form params</h3>
					<table>
						<thead>
							<tr>
								<th>
									<strong>Param</strong>
								</th>
								<th>
									<strong>Type</strong>
								</th>
								<th>Required</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>form_items</strong>
								</td>
								<td>
									<em>array</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
							<tr>
								<td>
									<strong>form_title</strong>
								</td>
								<td>
									<em>string</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
							<tr>
								<td>
									<strong>form_buttons</strong>
								</td>
								<td>
									<em>array</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
						</tbody>
					</table>
					<h3>Form item params</h3>
					<table>
						<thead>
							<tr>
								<th>
									<strong>Param</strong>
								</th>
								<th>
									<strong>Type</strong>
								</th>
								<th>Required</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>name</strong>
								</td>
								<td>
									<em>string</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
							<tr>
								<td>
									<strong>label</strong>
								</td>
								<td>
									<em>string</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
							<tr>
								<td>
									<strong>type</strong>
								</td>
								<td>
									<em>string</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
						</tbody>
					</table>
					<h3>Form button params</h3>
					<table>
						<thead>
							<tr>
								<th>
									<strong>Param</strong>
								</th>
								<th>
									<strong>Type</strong>
								</th>
								<th>Required</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>title</strong>
								</td>
								<td>
									<em>string</em>
								</td>
								<td>
									<em>yes</em>
								</td>
							</tr>
						</tbody>
					</table>
				</article>
			</div>
		</div>
	);
};

export default AboutPage;

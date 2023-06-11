from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/preview', methods=['POST'])
def preview():
    text = request.form['text']
    font_size = request.form['font-size']
    font_color = request.form['font-color']
    font_family = request.form['font-family']
    font_style = request.form['font-style']
    paragraph_style = request.form['paragraph-style']
    return render_template(
        'preview.html',
        text=text,
        font_size=font_size,
        font_color=font_color,
        font_family=font_family,
        font_style=font_style,
        paragraph_style=paragraph_style
    )

if __name__ == '__main__':
    app.run()

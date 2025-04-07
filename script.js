document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // جمع إجابات المسح وحساب النتيجة الإجمالية.
    const formData = new FormData(this);
    let score = 0;
    for (let value of formData.values()) {
      score += parseInt(value);
    }
  
    // تحديد فئة النتيجة بناءً على المجموع.
    let resultText = '';
    if (score <= 6) {
      resultText = '<h3>عاداتك الرقمية متوازنة!</h3><p>أحسنتِ! أنتِ تديرين وقتك على وسائل التواصل الاجتماعي بشكل جيد.</p>';
    } else if (score <= 10) {
      resultText = '<h3>عاداتك الرقمية معتدلة.</h3><p>قد تستفيدين من بعض التعديلات لتحقيق توازن أفضل.</p>';
    } else {
      resultText = '<h3>قد تكونين تعانين من زيادة استخدام وسائل التواصل الاجتماعي.</h3><p>فكري في وضع حدود أكثر صرامة وأوقات للابتعاد عن التكنولوجيا.</p>';
    }
  
    // عرض النتيجة مع تأثير ظهور تدريجي.
    const resultContainer = document.getElementById('quiz-result');
    resultContainer.innerHTML = resultText;
    resultContainer.style.opacity = 0;
    resultContainer.style.transition = 'opacity 0.5s';
    setTimeout(() => { 
      resultContainer.style.opacity = 1; 
  
      // بعد ظهور النتيجة، إضافة توصيات لمزيد من النصائح.
      const recommendations = `
        <div class="recommendations">
          <h3>للمزيد من النصائح:</h3>
          <p>يمكنك مشاهدة بعض الفيديوهات على YouTube التي تقدم استراتيجيات عملية للتخلص من الإدمان الرقمي وتنظيم وقتك بشكل أفضل:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=TwB6_Rr9Ryg" target="_blank">فيديو: تركت إدمان الجوال بهذه الطريقة - تجربة 4 شهور ماضية</a></li>
          </ul>
          <h3>تطبيقات موصى بها:</h3>
          <p>جرّب هذه التطبيقات التي تساعدك على مراقبة وقت استخدامك للهاتف وتعزيز التركيز:</p>
          <ul>
            <li><a href="https://forestapp.cc/" target="_blank">تطبيق Forest</a> - لتعزيز التركيز والابتعاد عن الهاتف.</li>
            <li><a href="https://play.google.com/store/apps/details?id=com.noscroll.antiscroll&hl=en_US" target="_blank">تطبيق StopScroll</a> - لتحديد وقت معين للمقاطع القصير على وسائل التواصل الاجتماعي .</li>
            <li><a href="https://www.stayfocusedapp.me/" target="_blank">تطبيق Stay Focused</a> - لتحديد أوقات محددة لاستخدام التطبيقات.</li>
          </ul>
        </div>
      `;
      resultContainer.innerHTML += recommendations;
    }, 100);
  });
  
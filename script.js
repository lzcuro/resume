// 페이지 로드 시 애니메이션 효과
document.addEventListener('DOMContentLoaded', function() {
    // 스킬 바 애니메이션
    const skillFills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    });

    skillFills.forEach(fill => observer.observe(fill));

    // 카드 호버 효과 개선
    const cards = document.querySelectorAll('.experience-item, .project-item, .achievement-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// PDF 저장(인쇄) 시 화면 전환: 배경을 흰색으로 바꿔 인쇄 미리보기/PDF가 깔끔하게 보이도록 함
window.addEventListener('beforeprint', function() {
    document.body.style.background = '#fff';
    document.body.style.color = '#2d3748';
});

window.addEventListener('afterprint', function() {
    document.body.style.background = '';
    document.body.style.color = '';
});

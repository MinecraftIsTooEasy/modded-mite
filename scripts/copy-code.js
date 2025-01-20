document.addEventListener('DOMContentLoaded', function() {
    // 创建 tooltip 元素
    const tooltip = document.createElement('div');
    tooltip.style.position = 'fixed';
    tooltip.style.backgroundColor = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '4px';
    tooltip.style.fontSize = '12px';
    tooltip.style.display = 'none'; // 初始隐藏
    document.body.appendChild(tooltip);

    // 获取所有带有 'copy-code' 类的元素
    const copyCodeElements = document.querySelectorAll('.copy-code');

    copyCodeElements.forEach(element => {
        element.addEventListener('click', function() {
            // 创建一个临时的 textarea 元素
            const textarea = document.createElement('textarea');
            textarea.value = element.textContent; // 获取 code 标签中的文本
            document.body.appendChild(textarea);
            textarea.select(); // 选中文本
            document.execCommand('copy'); // 执行复制命令
            document.body.removeChild(textarea); // 移除临时 textarea

            // 提示用户已复制
            tooltip.textContent = '已复制: ' + textarea.value;
            tooltip.style.display = 'block';
            tooltip.style.left = element.getBoundingClientRect().left + 'px';
            tooltip.style.top = (element.getBoundingClientRect().top - tooltip.offsetHeight - 5) + 'px';

            // 自动隐藏 tooltip
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 2000);
        });

        // 添加鼠标悬浮事件以显示 tooltip
        element.addEventListener('mouseenter', function() {
            tooltip.textContent = '点击复制代码';
            tooltip.style.display = 'block';
            tooltip.style.left = element.getBoundingClientRect().left + 'px';
            tooltip.style.top = (element.getBoundingClientRect().top - tooltip.offsetHeight - 5) + 'px';
        });

        // 添加鼠标离开事件以隐藏 tooltip
        element.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});

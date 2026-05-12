const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple replace of <img src=... className="..." /> to <Image src=... fill className="..." />
            if (content.includes('<img ')) {
                content = content.replace(/<img([^>]*)src="([^"]+)"([^>]*)>/g, (match, p1, src, p3) => {
                    // Check if it already has fill or width
                    const props = p1 + p3;
                    if (!props.includes('fill') && !props.includes('width')) {
                        return `<Image src="${src}" fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"${props} />`;
                    }
                    return `<Image src="${src}" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"${props} />`;
                });
                modified = true;
            }

            if (modified) {
                // Ensure import Image from "next/image" exists
                if (!content.includes('import Image from "next/image"')) {
                    content = 'import Image from "next/image";\n' + content;
                }
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

walkDir(srcDir);
console.log('Optimization complete.');

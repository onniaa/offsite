// MovingRock.js
import React, { useEffect, useRef } from 'react';
import './moving-rock.css';

const MovingRock = () => {
	const rockRef = useRef(null);
	const containerRef = useRef(null);
	const fragmentsRef = useRef([]);

	useEffect(() => {
		// Start movement when component mounts
		moveDiagonally();

		// Add click handler to rock
		const rock = rockRef.current;
		if (rock) {
			rock.addEventListener('click', handleRockClick);
		}

		// Clean up any animations and event listeners on unmount
		return () => {
			const fragments = document.querySelectorAll('.rock-fragment');
			fragments.forEach(fragment => fragment.remove());

			if (rock) {
				rock.removeEventListener('click', handleRockClick);
			}
		};
	}, []);

	// Separate function for click handler to use in both event listener and cleanup
	const handleRockClick = (e) => {
		e.stopPropagation();
		explodeRock();
	};

	const moveDiagonally = () => {
		const rock = rockRef.current;
		const container = containerRef.current;

		if (!rock || !container) return;

		// Randomly choose direction (left-to-right or right-to-left)
		const goingLeftToRight = Math.random() > 0.5;

		// Start position depends on direction
		let startX;
		if (goingLeftToRight) {
			// Start from left side
			startX = Math.floor(Math.random() * (container.clientWidth / 3));
		} else {
			// Start from right side
			startX = container.clientWidth - Math.floor(Math.random() * (container.clientWidth / 3)) - 50;
		}

		const startY = container.clientHeight - 50;

		// Set initial position
		rock.style.transition = 'none';
		rock.style.left = startX + 'px';
		rock.style.top = startY + 'px';

		// Vary the angle (always moving upward, but direction depends on left/right)
		let angleInRadians;
		if (goingLeftToRight) {
			angleInRadians = (Math.random() * 25 + 20) * Math.PI / 180;
		} else {
			angleInRadians = (Math.random() * 25 + 20) * Math.PI / 180;
			angleInRadians = Math.PI - angleInRadians; // Mirror for right-to-left
		}

		// Vary the speed by changing the duration
		const duration = 30; // Between 2-6 seconds

		// Calculate the endpoint
		const distance = Math.max(container.clientWidth, container.clientHeight) * 2;
		const moveX = Math.cos(angleInRadians) * distance;
		const moveY = -Math.sin(angleInRadians) * distance; // Negative for upward

		const endX = startX + moveX;
		const endY = startY + moveY;

		// Wait a moment before starting movement
		setTimeout(() => {
			// Start the diagonal movement
			rock.style.transition = `left ${duration}s linear, top ${duration}s linear`;
			rock.style.left = endX + 'px';
			rock.style.top = endY + 'px';

			// Start the next movement after this one finishes
			setTimeout(() => {
				moveDiagonally();
			}, duration * 1000);
		}, 50);
	};

	const explodeRock = () => {
		const rock = rockRef.current;
		const container = containerRef.current;

		if (!rock || !container) return;

		const rockRect = rock.getBoundingClientRect();
		const rockCenterX = rockRect.left + rockRect.width / 2;
		const rockCenterY = rockRect.top + rockRect.height / 2;

		// Hide the original rock
		rock.style.display = 'none';

		// Clear any existing fragments
		fragmentsRef.current.forEach(fragment => fragment.remove());
		fragmentsRef.current = [];

		// Create fragments
		for (let i = 0; i < 8; i++) {
			createFragment(rockCenterX, rockCenterY, i);
		}

		// Re-appear after animation completes
		setTimeout(function () {
			// Remove fragments
			fragmentsRef.current.forEach(fragment => fragment.remove());
			fragmentsRef.current = [];

			// Show rock again
			rock.style.display = 'block';
			rock.style.transition = 'none';

			// Resume diagonal movement
			moveDiagonally();
		}, 1000);
	};

	const createFragment = (x, y, index) => {
		const container = containerRef.current;
		if (!container) return;

		const fragment = document.createElement('div');
		fragment.className = 'rock-fragment';
		container.appendChild(fragment);

		// Add to refs array for cleanup
		fragmentsRef.current.push(fragment);

		// Position at center of original rock
		fragment.style.left = (x - 7.5) + 'px';
		fragment.style.top = (y - 7.5) + 'px';

		// Calculate fragment trajectory angle
		const angle = (index / 8) * Math.PI * 2;
		const distance = 50 + Math.random() * 100;

		const targetX = x + Math.cos(angle) * distance;
		const targetY = y + Math.sin(angle) * distance;

		// Animate the fragment
		setTimeout(() => {
			fragment.style.left = targetX + 'px';
			fragment.style.top = targetY + 'px';
			fragment.style.opacity = '0';
			fragment.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
		}, 10);
	};

	return (
		<div ref={containerRef} className="rock-container">
			<div ref={rockRef} className="rock" />
		</div>
	);
};

export default MovingRock;
